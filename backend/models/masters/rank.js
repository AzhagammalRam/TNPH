const db = require('../dbconnection');

const Rank = {
  getAll: () => db.query('SELECT * FROM ranks WHERE status = 1'),
  create: (name) => db.query('INSERT INTO ranks (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE ranks SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE ranks SET status = 0 WHERE id = ?', [id]),
};

module.exports = Rank;