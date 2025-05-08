const db = require('../dbconnection');

const Location = {
    getAll: () => db.query('SELECT * FROM locations WHERE status = 1'),
  
    create: (organization_id, location) =>
      db.query('INSERT INTO locations (organization_id, location) VALUES (?, ?)', [organization_id, location]),
  
    update: (id, organization_id, location) =>
      db.query('UPDATE locations SET organization_id = ?, location = ? WHERE id = ?', [organization_id, location, id]),
  
    delete: (id) =>
      db.query('UPDATE locations SET status = 0 WHERE id = ?', [id]),
  };
  

module.exports = Location;