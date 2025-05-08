const Roles = require('../../models/masters/roles');

exports.getAll = async (req, res) => {
    const [rows] = await Roles.getAll();
    res.json(rows);
}

exports.create = async (req, res) => {
    const { rank_id, role } = req.body;
    await Roles.create(rank_id, role);
    res.status(201).json({ message: 'Role added' });
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { rank_id, role } = req.body;
    await Roles.update(id, rank_id, role);
    res.json({ message: 'Role updated' });
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    await Roles.delete(id);
    res.json({ message: 'Role deleted' });
}



