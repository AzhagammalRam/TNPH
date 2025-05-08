const TypeOfLeave = require('../../models/masters/typeofleave');

exports.getAll = async (req, res) => {
  const [rows] = await TypeOfLeave.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await TypeOfLeave.create(name);
  res.status(201).json({ message: 'Type Of Leave added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await TypeOfLeave.update(id, name);
  res.json({ message: 'Type Of Leave updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await TypeOfLeave.delete(id);
  res.json({ message: 'Type Of Leave deleted' });
};
