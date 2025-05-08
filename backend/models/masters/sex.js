const db = require('../dbconnection');

const Sex = {
  getAll: () => db.query('SELECT * FROM sex WHERE status = 1'),
  create: (name) => db.query('INSERT INTO sex (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE sex SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE sex SET status = 0 WHERE id = ?', [id]),
};

module.exports = Sex;