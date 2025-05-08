const JobType = require('../../models/masters/jobType');

exports.getAll = async (req, res) => {
  const [rows] = await JobType.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await JobType.create(name);
  res.status(201).json({ message: 'Job type added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await JobType.update(id, name);
  res.json({ message: 'Job type updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await JobType.delete(id);
  res.json({ message: 'Job type deleted' });
};
