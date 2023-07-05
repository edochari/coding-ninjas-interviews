const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students_controller');

router.post("/create",studentsController.create);

module.exports = router;