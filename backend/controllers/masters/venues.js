const Venues = require('../../models/masters/venues');

exports.getAll = async (req, res) => {
    const [rows] = await Venues.getAll();
    res.json(rows);
}

exports.create = async (req, res) => {
    const { location_id, venue } = req.body;
    await Venues.create(location_id, venue);
    res.status(201).json({ message: 'Venue added' });
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { location_id, venue } = req.body;
    await Venues.update(id, location_id, venue);
    res.json({ message: 'Venue updated' });
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    await Venues.delete(id);
    res.json({ message: 'Venue deleted' });
}



