const db = require('../dbconnection');

const Role = {
    getAll: () => db.query('SELECT * FROM roles WHERE status = 1'),
  
    create: (rank_id,role ) =>
      db.query('INSERT INTO roles (rank_id, role) VALUES (?, ?)', [rank_id, role]),
  
    update: (id, rank_id, role) =>
      db.query('UPDATE roles SET rank_id = ?, role = ? WHERE id = ?', [rank_id, role, id]),
  
    delete: (id) =>
      db.query('UPDATE roles SET status = 0 WHERE id = ?', [id]),
  };
  

module.exports = Role;