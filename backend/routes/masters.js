const express = require('express');
const router = express.Router();
// Controllers
const organizationController = require('../controllers/masters/organisation');
const jobTypecontroller = require('../controllers/masters/jobType');
const rankController = require('../controllers/masters/rank');
const sexController = require('../controllers/masters/sex');
const trainingTypeController = require('../controllers/masters/trainingType');
const componentController = require('../controllers/masters/component');
const typeOfLeaveController = require('../controllers/masters/typeofleave');
const dsrFieldStatusController = require('../controllers/masters/dsrfieldstatus');
const eventCeremonyController = require('../controllers/masters/event_ceremony');
const calenderWeekController = require('../controllers/masters/calender_week');
const breaksController = require('../controllers/masters/breaks');
const subjectController = require('../controllers/masters/subjects');
const locationController = require('../controllers/masters/locations');
const roleController = require('../controllers/masters/roles');
const VenuesController = require('../controllers/masters/venues');


// Organization routes
router.get('/organizations', organizationController.getAll);
router.post('/organizations', organizationController.create);
router.put('/organizations/:id', organizationController.update);
router.delete('/organizations/:id', organizationController.delete);
// Job type routes
router.get('/job-types', jobTypecontroller.getAll);
router.post('/job-types', jobTypecontroller.create);
router.put('/job-types/:id', jobTypecontroller.update);
router.delete('/job-types/:id', jobTypecontroller.delete);
// Rank routes
router.get('/ranks', rankController.getAll);
router.post('/ranks', rankController.create);
router.put('/ranks/:id', rankController.update);
router.delete('/ranks/:id', rankController.delete);
// Sex routes
router.get('/sex', sexController.getAll);
router.post('/sex', sexController.create);
router.put('/sex/:id', sexController.update);
router.delete('/sex/:id', sexController.delete);
// Training type routes
router.get('/training-types', trainingTypeController.getAll);
router.post('/training-types', trainingTypeController.create);
router.put('/training-types/:id', trainingTypeController.update);
router.delete('/training-types/:id', trainingTypeController.delete);
// Component routes
router.get('/components', componentController.getAll);
router.post('/components', componentController.create);
router.put('/components/:id', componentController.update);
router.delete('/components/:id', componentController.delete);
// Type of leave routes
router.get('/leave-types', typeOfLeaveController.getAll);
router.post('/leave-types', typeOfLeaveController.create);
router.put('/leave-types/:id', typeOfLeaveController.update);
router.delete('/leave-types/:id', typeOfLeaveController.delete);
// Dsr field status routes
router.get('/dsr-statuses', dsrFieldStatusController.getAll);
router.post('/dsr-statuses', dsrFieldStatusController.create);
router.put('/dsr-statuses/:id', dsrFieldStatusController.update);
router.delete('/dsr-statuses/:id', dsrFieldStatusController.delete);
// Event ceremony routes
router.get('/events', eventCeremonyController.getAll);
router.post('/events', eventCeremonyController.create);
router.put('/events/:id', eventCeremonyController.update);
router.delete('/events/:id', eventCeremonyController.delete);
// Calender week routes
router.get('/calendar-weeks', calenderWeekController.getAll);
router.post('/calendar-weeks', calenderWeekController.create);
router.put('/calendar-weeks/:id', calenderWeekController.update);
router.delete('/calendar-weeks/:id', calenderWeekController.delete);
// Breaks routes
router.get('/breaks', breaksController.getAll);
router.post('/breaks', breaksController.create);
router.put('/breaks/:id', breaksController.update);
router.delete('/breaks/:id', breaksController.delete);
// Subject routes
router.get('/subjects', subjectController.getAll);
router.post('/subjects', subjectController.create);
router.put('/subjects/:id', subjectController.update);
router.delete('/subjects/:id', subjectController.delete);

// Locations routes
router.get('/locations', locationController.getAll);
router.post('/locations', locationController.create);
router.put('/locations/:id', locationController.update);
router.delete('/locations/:id', locationController.delete);
// Roles routes
router.get('/roles', roleController.getAll);
router.post('/roles', roleController.create);
router.put('/roles/:id', roleController.update);
router.delete('/roles/:id', roleController.delete);
// Venue routes
router.get('/venues', VenuesController.getAll);
router.post('/venues', VenuesController.create);
router.put('/venues/:id', VenuesController.update);
router.delete('/venues/:id', VenuesController.delete);

module.exports = router;
