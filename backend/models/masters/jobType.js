const db = require('../dbconnection');

const JobType = {
  getAll: () => db.query('SELECT * FROM jobtype WHERE status = 1'),
  create: (name) => db.query('INSERT INTO jobtype (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE jobtype SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE jobtype SET status = 0 WHERE id = ?', [id]),
};

module.exports = JobType;
