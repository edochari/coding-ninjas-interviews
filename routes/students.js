const express = require('express');
const router = express.Router();

const InterviewController = require('../controllers/Interviews_controller');
const studentsController = require('../controllers/students_controller');

router.post("/create",studentsController.create);
router.get('/Interviews',InterviewController.Interviews);
router.get('/export',studentsController.exportStudent);
router.use('/Interviews',require('./Interviews'));



module.exports = router;