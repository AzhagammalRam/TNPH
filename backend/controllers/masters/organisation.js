const Organisation = require('../../models/masters/organisation');

exports.getAll = async (req, res) => {
  const [rows] = await Organisation.getAll();
  res.json(rows);
};
exports.create = async (req, res) => {
  const { name } = req.body;
  await Organisation.create(name);
  res.status(201).json({ message: 'Organisation added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Organisation.update(id, name);
  res.json({ message: 'Organisation updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Organisation.delete(id);
  res.json({ message: 'Organisation deleted' });
};
