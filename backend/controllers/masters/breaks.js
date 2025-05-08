const Breaks = require('../../models/masters/breaks');

exports.getAll = async (req, res) => {
  const [rows] = await Breaks.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Breaks.create(name);
  res.status(201).json({ message: 'Breaks added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Breaks.update(id, name);
  res.json({ message: 'Breaks updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Breaks.delete(id);
  res.json({ message: 'Breaks deleted' });
};
