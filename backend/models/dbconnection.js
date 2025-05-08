const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',       // your MySQL password
  database: 'testdb'  // your database
});

// Optional: Log connection status
db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Export promise-based connection
module.exports = db.promise(); // 👈 this is the fix
