const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { authenticator } = require('../auth');

router.use(bodyParser.json());

router.get('/', authenticator, (req, res) => {
  let allTimeTotals;
  let totalsPerUserPerPomo;
  let totalsPerUserPerPomoPerDay;
  let totalsPerUserPerWeek;
  let totalsPerUserPerMonth;
  let dailyAverages;

  // all-time totals per user
  return req.app.locals.knex
    .select()
    .sum('total_work_time as total time working')
    .sum('total_break_time as total time not working')
    .count('* as completed pomos')
    .from('sessions')
    .where('user_id', req.user.id)
    .then(results => {
      allTimeTotals = results;

      // per user, per pomo task
      return req.app.locals.knex
        .select('name as pomo task')
        .sum('total_work_time as work, all-time')
        .sum('total_break_time as break, all-time')
        .count('* as pomos, all-time')
        .from('sessions')
        .where('user_id', req.user.id)
        .groupBy('name');
    })
    .then(results => {
      totalsPerUserPerPomo = results;

      // per user, per day, per pomo task
      return req.app.locals.knex
        .select('name as pomo task')
        .column(req.app.locals.knex.raw('date(modified)'))
        .sum('total_work_time as work total today')
        .sum('total_break_time as break total today')
        .count('* as pomos today')
        .from('sessions')
        .where('user_id', req.user.id)
        .groupBy([req.app.locals.knex.raw('date(modified)'), 'name'])
        .orderBy(req.app.locals.knex.raw('date(modified)'));
    })
    .then(results => {
      totalsPerUserPerPomoPerDay = results;

      // weekly user totals
      return req.app.locals.knex
        .column(req.app.locals.knex.raw('date_trunc(\'week\', date(modified)) as weekly'))
        .select('name')
        .sum('total_work_time as work time, this week')
        .sum('total_break_time as break time, this week')
        .count('* as pomos, this week')
        .from('sessions')
        .where('user_id', req.user.id)
        .groupBy(['weekly', 'name'])
        .orderBy('weekly');
    })
    .then(results => {
      totalsPerUserPerWeek = results;

      // monthly user totals
      return req.app.locals.knex
        .column(req.app.locals.knex.raw('date_trunc(\'month\', date(modified)) as monthly'))
        .select('name')
        .sum('total_work_time as work time, this month')
        .sum('total_break_time as break time, this month')
        .count('* as pomos, this month')
        .from('sessions')
        .where('user_id', req.user.id)
        .groupBy(['monthly', 'name'])
        .orderBy('monthly');
    })
    .then(results => {
      totalsPerUserPerMonth = results;

      // daily averages
      return req.app.locals.knex
        .select('name')
        .avg('total_work_time as average work per day')
        .avg('total_break_time as average break per day')
        .max('total_work_time as longest work session')
        .min('total_work_time as shortest work session')
        .max('total_work_time as longest break')
        .min('total_break_time as shortest break')
        .from('sessions')
        .where('user_id', req.user.id)
        .groupBy('name');
    })
    .then(results => {
      dailyAverages = results;

      return res.status(200).json({
        allTimeTotals,
        totalsPerUserPerPomo,
        totalsPerUserPerPomoPerDay,
        totalsPerUserPerWeek,
        totalsPerUserPerMonth,
        dailyAverages
      });
    })  
    .catch(err => res.status(500).send(err));
});

// Create a new session in DB 
router.post('/', authenticator, (req, res) => {
  const requiredFields = ['name', 'work_duration', 'break_duration', 'is_completed'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  let { name, work_duration, break_duration, is_completed } = req.body;

  return req.app.locals.knex
    .insert({ 
      name,
      work_duration,
      break_duration,
      is_completed,
      user_id: req.user.id
    })
    .into('sessions')
    .returning([
      'id',
      'modified', 
      'name', 
      'work_duration', 
      'break_duration', 
      'is_completed', 
      'total_work_time', 
      'total_break_time', 
      'user_id'
    ])
    .then(result => {
      return res.status(201).json(result);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;