const db = require('../dbconnection');

const Component = {
  getAll: () => db.query('SELECT * FROM component WHERE status = 1'),
  create: (name) => db.query('INSERT INTO component (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE component SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE component SET status = 0 WHERE id = ?', [id]),
};

module.exports = Component;