const Rank = require('../../models/masters/rank');

exports.getAll = async (req, res) => {
  const [rows] = await Rank.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Rank.create(name);
  res.status(201).json({ message: 'Rank added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Rank.update(id, name);
  res.json({ message: 'Rank updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Rank.delete(id);
  res.json({ message: 'Rank deleted' });
};
