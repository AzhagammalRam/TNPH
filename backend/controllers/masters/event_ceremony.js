const EventCeremony = require('../../models/masters/event_ceremony');

exports.getAll = async (req, res) => {
  const [rows] = await EventCeremony.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await EventCeremony.create(name);
  res.status(201).json({ message: 'Event Ceremony added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await EventCeremony.update(id, name);
  res.json({ message: 'Event Ceremony updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await EventCeremony.delete(id);
  res.json({ message: 'Event Ceremony deleted' });
};
