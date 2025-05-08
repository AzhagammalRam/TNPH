const db = require('../dbconnection');

const TypeOfLeave = {
  getAll: () => db.query('SELECT * FROM typeofleave WHERE status = 1'),
  create: (name) => db.query('INSERT INTO typeofleave (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE typeofleave SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE typeofleave SET status = 0 WHERE id = ?', [id]),
};

module.exports = TypeOfLeave;