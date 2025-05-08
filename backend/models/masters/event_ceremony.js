const db = require('../dbconnection');

const EventCeremony = {
  getAll: () => db.query('SELECT * FROM event_ceremony WHERE status = 1'),
  create: (name) => db.query('INSERT INTO event_ceremony (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE event_ceremony SET name = ? WHERE id = ?', [name, id]),
  delete: (id) => db.query('UPDATE event_ceremony SET status = 0 WHERE id = ?', [id]),
};

module.exports = EventCeremony;