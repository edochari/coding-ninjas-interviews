const bcrypt = require('bcrypt');
const User = require('../models/user');
const Students = require('../models/students');

module.exports.signUp = function(req,res){
    return res.render("signup",{
        title:'Sign Up'
    });
}

module.exports.profile = async function(req,res){
    let Student = await Students.find({});
    
     return res.render('students',{
         title:'students',
         students:Student,
     })
 }


module.exports.createSession = function (req, res) {
   
    
   return res.redirect('/users/profile');
}


module.exports.create = async function(req,res){
    try{
         let hashedPassword = bcrypt.hash(req.body.password,10);
         console.log("signing up");
         if (req.body.password !== req.body.confirm_password) {
             return res.redirect('back');
         }
     
         User.findOne({ email: req.body.email }).then((user) => {
            console.log(user);
             if (!user) {
                 User.create(req.body).then((user) => {
                     console.log("User successfully created");
                     return res.redirect('/');
                 }).catch((err) => {
                     console.log("Error while creating user");
                 })
             }
             else {
                 return res.redirect('back');
             }
         }).catch((err) => {
             console.log("Error while finding user");
         })

    }catch(err){
        return res.redirect('/users/sign-up')
    }
}



module.exports.destroySession = function (req, res) {
   req.logout(function(err) {
    if (err) { console.log("Error while logging out")}
    
    res.redirect('/');
  });
  
}