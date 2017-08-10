CREATE TABLE users(
  id          serial PRIMARY KEY, 
  modified    timestamp DEFAULT current_timestamp,
  username    text NOT NULL UNIQUE,
  password    text NOT NULL,
  first_name  text,
  last_name   text,
  email       text
);

CREATE TABLE sessions(
  id                    serial PRIMARY KEY,
  modified              timestamp DEFAULT current_timestamp,
  name                  text NOT NULL,
  work_duration         interval NOT NULL,
  break_duration        interval NOT NULL,
  total_work_time       interval DEFAULT '0 00:00:00',
  total_break_time      interval DEFAULT '0 00:00:00',
  user_id               integer REFERENCES users ON DELETE CASCADE,
  is_completed          boolean DEFAULT false
);

INSERT INTO users (username, password, first_name, last_name, email) VALUES
  ('liz123', 'nbc', 'Liz', 'Lemon', 'liz@nbc.com'),
  ('thePrez', '123', 'Donald', 'Trump', 'thedonaldfd@whitehouse.gov')  
  RETURNING id, modified, username, password, first_name, last_name, email;

SELECT users.id as "user ID", users.username, users.first_name, users.last_name, sessions.name as "session name", sessions.work_duration, sessions.user_id as "session ID"
  FROM users
  INNER JOIN sessions
  ON users.id = sessions.user_id;

{ 
  "name": "tabata", 
  "work_duration": "0 43:43:44", 
  "break_duration": "0 43:43:44", 
  "user_id": 2
}

postgres://vatabenm:AuwiKjXtUyHbyaHLWpR0GWVPCFmLWQp1@stampy.db.elephantsql.com:5432/vatabenm

16
password = dboy
$2a$10$z5MF8izNXcr8PvSZyeoPkeGi7vjF7/FQFqC66DVcPmrJdCdH2nGQa

15
evan
password = headphones
$2a$10$dLvbawcu1PHGk4RZbQ358uc1EtcL26yqboeLboBu.LSPb0gW/3dlC

-- per user, totals
SELECT
  sum(total_work_time) as "total time working", 
  sum(total_break_time) as "total time not working", 
  count(*) as "completed pomos"
FROM sessions
  WHERE user_id=15;

-- per user, per pomo task: total time working, breaking, and completed pomos
SELECT 
  name as "pomo task", 
  sum(total_work_time) as "total time working", 
  sum(total_break_time) as "total time not working", 
  count(*) as "completed pomos today"
FROM sessions WHERE user_id=15
GROUP BY 
  name;

-- per user, per day, per pomo task: total time working, breaking, and completed pomos
SELECT
  date(modified),
  name as "pomo task", 
  sum(total_work_time) as "total time working", 
  sum(total_break_time) as "total time not working", 
  count(*) as "completed pomos today"
FROM sessions WHERE user_id=15
GROUP BY
  date(modified),
  name
ORDER BY
  date(modified);

-- totals by week
SELECT date_trunc('week', date(modified)) AS weekly,
       COUNT(*)           
FROM sessions
GROUP BY weekly
ORDER BY weekly;

-- totals by month

-- averages