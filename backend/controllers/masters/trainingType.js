const TrainingType = require('../../models/masters/trainingType');

exports.getAll = async (req, res) => {
  const [rows] = await TrainingType.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await TrainingType.create(name);
  res.status(201).json({ message: 'Training Type added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await TrainingType.update(id, name);
  res.json({ message: 'Training Type updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await TrainingType.delete(id);
  res.json({ message: 'Training Type deleted' });
};
