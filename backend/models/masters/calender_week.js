const db = require('../dbconnection');

const CalenderWeek = {
  getAll: () => db.query('SELECT * FROM calender_week WHERE status = 1'),
  create: (name) => db.query('INSERT INTO calender_week (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE calender_week SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE calender_week SET status = 0 WHERE id = ?', [id]),
};

module.exports = CalenderWeek;