const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const jobController = require('../controllers/jobs_controller');

router.get('/',homeController.home);
router.get('/jobs',jobController.jobs);
router.use('/users',require('./user'));
router.use('/students',require('./students'));

module.exports = router;