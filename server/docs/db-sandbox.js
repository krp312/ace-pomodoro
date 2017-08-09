require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// const DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'postgresql://localhost/dev-restaurants-app';
const DATABASE_URL = 'postgres://vatabenm:AuwiKjXtUyHbyaHLWpR0GWVPCFmLWQp1@stampy.db.elephantsql.com:5432/vatabenm';

const DATABASE = {
  client: 'pg',
  connection: DATABASE_URL,
  pool: { min: 0, max: 3 },
  debug: true
};

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan(':method :url :res[location] :status'));

app.use(bodyParser.json());

let server;
let knex;
function runServer(database = DATABASE, port = PORT) {
  return new Promise((resolve, reject) => {
    try {
      knex = require('knex')(database);
      server = app.listen(port, () => {
        console.info(`App listening on port ${server.address().port}`);
        resolve();
      });
    }
    catch (err) {
      console.error(`Can't start server: ${err}`);
      reject(err);
    }
  });
}

function closeServer() {
  return knex.destroy().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing servers');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => {
    console.error(`Can't start server: ${err}`);
    throw err;
  });
}

knex.select()
  .from('users')
  .then(results => {
    console.log(results);
  });