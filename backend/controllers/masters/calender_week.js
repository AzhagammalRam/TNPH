const CalenderWeek = require('../../models/masters/calender_week');

exports.getAll = async (req, res) => {
  const [rows] = await CalenderWeek.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await CalenderWeek.create(name);
  res.status(201).json({ message: 'Calender Week added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await CalenderWeek.update(id, name);
  res.json({ message: 'Calender Week updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await CalenderWeek.delete(id);
  res.json({ message: 'Calender Week deleted' });
};
