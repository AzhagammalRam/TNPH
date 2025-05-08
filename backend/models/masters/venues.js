const db = require('../dbconnection');

const Venue = {
    getAll: () => db.query('SELECT * FROM venues WHERE status = 1'),
  
    create: (location_id,venue ) =>
      db.query('INSERT INTO venues (location_id, venue) VALUES (?, ?)', [location_id, venue]),
  
    update: (id, location_id, venue) =>
      db.query('UPDATE venues SET location_id = ?, venue = ? WHERE id = ?', [location_id, venue, id]),
  
    delete: (id) =>
      db.query('UPDATE venues SET status = 0 WHERE id = ?', [id]),
  };
  

module.exports = Venue;