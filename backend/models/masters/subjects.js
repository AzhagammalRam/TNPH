const db = require('../dbconnection');

const Subject = {
  getAll: () => db.query('SELECT * FROM subjects WHERE status = 1'),
  create: (name) => db.query('INSERT INTO subjects (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE subjects SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE subjects SET status = 0 WHERE id = ?', [id]),
};

module.exports = Subject;