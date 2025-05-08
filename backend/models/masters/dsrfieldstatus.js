const db = require('../dbconnection');

const DSRFieldStatus = {
  getAll: () => db.query('SELECT * FROM dsrfieldstatus WHERE status = 1'),
  create: (name) => db.query('INSERT INTO dsrfieldstatus (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE dsrfieldstatus SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE dsrfieldstatus SET status = 0 WHERE id = ?', [id]),
};

module.exports = DSRFieldStatus;