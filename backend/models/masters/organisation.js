const db = require('../dbconnection');


const OrganizationModel = {
  getAll: () => db.query('SELECT * FROM organizations WHERE status = 1'),
  create: (name) => db.query('INSERT INTO organizations (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE organizations SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE organizations SET status = 0 WHERE id = ?', [id]),
};

module.exports = OrganizationModel;

