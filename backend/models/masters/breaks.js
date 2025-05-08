const db = require('../dbconnection');

const Breaks = {
  getAll: () => db.query('SELECT * FROM breaks WHERE status = 1'),
  create: (name) => db.query('INSERT INTO breaks (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE breaks SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE breaks SET status = 0 WHERE id = ?', [id]),
};

module.exports = Breaks;