postgres cheat sheet

### start the server
pg_ctl start -l $PGDATA/server.log
or 
pg_ctl (may require new terminal window)

### stop server
pg_ctl stop

### create user
createuser -Pw --interactive

### create a database
createdb -U username db-name
or
CREATE DATABASE name

### delete database
dropdb dbName
or
DROP DATABASE name // hasn't worked for me yet

### shell in
there is no notion of hierarchy in psql
psql -U username to connect as that user, AND that database
or
psql -U username database

### populate db
psql -U username db-name -f filepath-to-sql-file

### see public tables
\dt+
or
\dt

### switch dbs in psql
\c db-name

### see all tables (like primary key sequences)
\d

### see table properties
\d tableName

### creating records
INSERT INTO 
  restaurants (name, borough, cuisine, address_building_number, address_street, address_zipcode) 
VALUES 
  ('Prince Taco', 'Queens', 'Mexican', '620', 'Astoria Boulevard', '11372') 
RETURNING 
  id, name; // which is optional

### escape singles quotes like this: 'Rebecca''s'

### querying
\x for pretty display

SELECT * FROM tableName;

SELECT * FROM restaurants WHERE id='9000';

SELECT * FROM restaurants
  WHERE borough = 'Brooklyn'
  AND cuisine = 'Italian';

SELECT * FROM restaurants
  WHERE borough = 'Brooklyn'
  AND cuisine in ('Italian', 'Chinese');  // cuisine needs to be italian and chinese

SELECT id, name FROM restaurants LIMIT 3;

SELECT id, name from restaurants
  WHERE borough = 'Bronx'
  AND cuisine = 'Japanese'
  ORDER BY name ASC
  LIMIT 10;

SELECT count(*) from grades;

### updating 

UPDATE restaurants
  SET cuisine = 'la cuisine Française'
  WHERE cuisine = 'French';

### deleting

DELETE FROM grades WHERE grade = 'Z';

### create table

CREATE TABLE users(
  id serial PRIMARY KEY,
  username text,
  firstName text,
  lastName text
)

### alter table
ALTER TABLE customers
  ADD COLUMN nick_name text,
  DROP COLUMN first_name;

ALTER TABLE customers
  RENAME COLUMN modified TO modified_as_of;

### drop or delete table
DROP TABLE tableName

### drop or delete database
dropdb dbName
or
DROP DATABASE dbName (from shell, can't delete current db though)