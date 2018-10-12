require('dotenv').config();
const express = require('express');
const app = express();
global.app = app;
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const sessionRouter = require('./routes/sessions');
const userRouter = require('./routes/users');
const { DATABASE, PORT } = require('./config');
const passport = require('passport');
const { basicStrategy } = require('./auth');
app.use(bodyParser.json());
app.use(morgan(':method :url :res[location] :status'));
app.use('/api/sessions', sessionRouter);
app.use('/api/users', userRouter);
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
passport.use(basicStrategy);

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
let knex;
function runServer(database = DATABASE, port = PORT) {
return new Promise((resolve, reject) => {
    try {
        // http://expressjs.com/en/4x/api.html#app.locals
        // app.locals is an object that has local variables
        // throughout the life of the app
        // access the object via `req.app.whatever-property`
        app.locals.knex = require('knex')(database);
        server = app.listen(port, () => {
            console.info(`App listening on port ${server.address().port}`);
            resolve();
        });
    } catch (err) {
        console.error(`Can't start server: ${err}`);
        reject(err);
    }
});
}

function closeServer() {
    return app.locals.knex.destroy().then(() => {
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
    runServer();
}

module.exports = {
    app,
    runServer,
    closeServer
};
