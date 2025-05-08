const Component = require('../../models/masters/component');

exports.getAll = async (req, res) => {
  const [rows] = await Component.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Component.create(name);
  res.status(201).json({ message: 'Component added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Component.update(id, name);
  res.json({ message: 'Component updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Component.delete(id);
  res.json({ message: 'Component deleted' });
};
