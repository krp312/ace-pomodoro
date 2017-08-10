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

// total overall per user
// knex.select()
//   .sum('total_work_time as total time working')
//   .sum('total_break_time as total time not working')
//   .count('* as completed pomos')
//   .from('sessions')
//   .where('user_id', 15)
//   .then(results => {
//     console.log(JSON.stringify(results));
//   });

// per user, per pomo task
// knex.select('name as pomo task')
//   .sum('total_work_time as work, all-time')
//   .sum('total_break_time as break, all-time')
//   .count('* as pomos, all-time')
//   .from('sessions')
//   .where('user_id', 15)
//   .groupBy('name')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 1));
//   });

// per user, per day, per pomo task
// knex.select('name as pomo task')
//   .column(knex.raw('date(modified)'))
//   .sum('total_work_time as work total today')
//   .sum('total_break_time as break total today')
//   .count('* as pomos today')
//   .from('sessions')
//   .where('user_id', 15)
//   .groupBy([knex.raw('date(modified)'), 'name'])
//   .orderBy(knex.raw('date(modified)'))
//   .then(results => {
//     console.log(JSON.stringify(results, null, 1));
//   });

// weekly user totals
// knex
//   .column(knex.raw("date_trunc('week', date(modified)) as weekly"))
//   .select('name')
//   .sum('total_work_time as work time, this week')
//   .sum('total_break_time as break time, this week')
//   .count('* as pomos, this week')
//   .from('sessions')
//   .where('user_id', 15)
//   .groupBy(['weekly', 'name'])
//   .orderBy('weekly')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   });

// monthly user totals
// knex
//   .column(knex.raw("date_trunc('month', date(modified)) as monthly"))
//   .select('name')
//   .sum('total_work_time as work time, this month')
//   .sum('total_break_time as break time, this month')
//   .count('* as pomos, this month')
//   .from('sessions')
//   .where('user_id', 15)
//   .groupBy(['monthly', 'name'])
//   .orderBy('monthly')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   });

// daily averages
// knex
//   .select('name')
//   .avg('total_work_time as average work per day')
//   .avg('total_break_time as average break per day')
//   .max('total_work_time as longest work session')
//   .min('total_work_time as shortest work session')
//   .max('total_work_time as longest break')
//   .min('total_break_time as shortest break')
//   .from('sessions')
//   .where('user_id', 15)
//   .groupBy('name')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   });