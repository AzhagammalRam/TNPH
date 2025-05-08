const db = require('../dbconnection');

const TrainingType = {
  getAll: () => db.query('SELECT * FROM trainingtype WHERE status = 1'),
  create: (name) => db.query('INSERT INTO trainingtype (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE trainingtype SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE trainingtype SET status = 0 WHERE id = ?', [id]),
};

module.exports = TrainingType;