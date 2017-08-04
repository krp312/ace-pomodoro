const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

// push to here
let cheeses =
  [
    'Bath Blue',
    'Barkham Blue',
    'Buxton Blue',
    'Cheshire Blue',
    'Devon Blue',
    'Dorset Blue Vinney',
    'Dovedale',
    'Exmoor Blue',
    'Harbourne Blue',
    'Lanark Blue',
    'Lymeswold',
    'Oxford Blue',
    'Shropshire Blue',
    'Stichelton',
    'Stilton',
    'Blue Wensleydale',
    'Yorkshire Blue'
  ];

// API endpoints go here!
app.get('/api/cheeses', (req, res) => {
  res.json(cheeses);
});

app.post('/api/addcheeses', (req, res) => {
  console.log('body' + req.body.test);
  // console.log('body' + JSON.stringify(req.headers));
  // console.log('body' + req.body.data);
  cheeses.push(req.body.test);
  res.json(cheeses);
  //res.json('fad' + req.body)
});

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(port=3001) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      resolve();
    }).on('error', reject);
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
