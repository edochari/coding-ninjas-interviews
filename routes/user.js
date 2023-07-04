const express = require('express');
const router = express.Router();
const passport = require('../config/passport-local-strategy');
const userController = require('../controllers/user_controller');

router.get('/sign-up',userController.signUp);
router.post('/create',userController.create);
router.post('/create-session',passport.authenticate(
    "local",
{failureRedirect:'/users/sign-in'})
,userController.students);
router.get('/sign-out',userController.destroySession);

module.exports=router;