const pg = require(‘pg’);
const pg = require('pg');
const pool = new pg.Pool({
  user: ‘sysadmin’,
  host: ‘127.0.0.1’,
  database: ‘mywebstore’,
  password: ‘123’,
  port: ‘5432’
});

pool.query(“SELECT NOW() ”, (err, res) => {
  console.log(err, res);
  pool.end();
});