const Subject = require('../../models/masters/subjects');

exports.getAll = async (req, res) => {
  const [rows] = await Subject.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Subject.create(name);
  res.status(201).json({ message: 'Subject added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Subject.update(id, name);
  res.json({ message: 'Subject updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Subject.delete(id);
  res.json({ message: 'Subject deleted' });
};
