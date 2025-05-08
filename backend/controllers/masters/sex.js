const Sex = require('../../models/masters/sex');

exports.getAll = async (req, res) => {
  const [rows] = await Sex.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Sex.create(name);
  res.status(201).json({ message: 'Sex added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Sex.update(id, name);
  res.json({ message: 'Sex updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Sex.delete(id);
  res.json({ message: 'Sex deleted' });
};
