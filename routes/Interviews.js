const express = require('express');
const router = express.Router();

const InterviewController = require('../controllers/Interviews_controller');



router.post("/create",InterviewController.create);




module.exports = router;