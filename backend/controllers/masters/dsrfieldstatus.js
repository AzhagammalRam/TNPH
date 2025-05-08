const DsrFieldStatus = require('../../models/masters/dsrfieldstatus');

exports.getAll = async (req, res) => {
  const [rows] = await DsrFieldStatus.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await DsrFieldStatus.create(name);
  res.status(201).json({ message: 'DSR Field Status added' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await DsrFieldStatus.update(id, name);
  res.json({ message: 'DSR Field Status updated' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await DsrFieldStatus.delete(id);
  res.json({ message: 'DSR Field Status deleted' });
};
