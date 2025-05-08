const Locations = require('../../models/masters/locations');

exports.getAll = async (req, res) => {
    const [rows] = await Locations.getAll();
    res.json(rows);
}

exports.create = async (req, res) => {
    const { organization_id, location } = req.body;
    await Locations.create(organization_id, location);
    res.status(201).json({ message: 'Location added' });
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { organization_id, location } = req.body;
    await Locations.update(id, organization_id, location);
    res.json({ message: 'Location updated' });
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    await Locations.delete(id);
    res.json({ message: 'Location deleted' });
}



