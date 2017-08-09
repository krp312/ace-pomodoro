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

-- BUT the select query in the 4th arg is going to come from the user object in passport, `req.user.id`, something like that
INSERT INTO sessions (name, work_duration, break_duration, user_id) VALUES 
  ('classic pomodoro', '0:25:00', '0:05:00', ( SELECT id FROM users WHERE username = 'liz123') ),
  ('hiit', '0:01:00', '0:00:15', ( SELECT id FROM users WHERE username = 'liz123') ),
  ('legislating', '0:10:00', '0:01:00', ( SELECT id FROM users WHERE username = 'thePrez') ),
  ('press conferencing', '0:20:00', '0:00:00', ( SELECT id FROM users WHERE username = 'thePrez') ),
  ('tweeting', '4 15:53:00', '0:01:00', ( SELECT id FROM users WHERE username = 'thePrez') )
  RETURNING name, work_duration, break_duration, user_id;

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

select everything from the same user
select sessions with the same name
get the count, per name

-- total overall completed intervals
SELECT * FROM sessions
  WHERE user_id=9

-- totals
SELECT name,
SUM(work_duration) as "working", 
SUM(break_duration) as "not working",
count(*) as "intervals completed"
FROM sessions
  WHERE user_id=9
  GROUP BY name;

-- averages

-- totals by day

-- totals by week

-- totals by month