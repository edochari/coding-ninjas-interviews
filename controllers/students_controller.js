const Students = require('../models/students');


module.exports.create = async function(req,res){
    Students.create(req.body).then((student)=>console.log("student",student));
    let Student = await Students.find({});
    return res.render('students',{
        title:'students',
        students:Student,
        
    })
}
module.exports.StudentsPage = async function(req,res){
   let Student = await Students.find({});
   
    return res.render('students',{
        title:'students',
        students:Student,
    })
}

module.exports.exportStudent = async function(req,res){
    try{
       let Students = [];

       let studentData = 
    }catch(err){
        console.log("Error in creating csv",err);
        return ;
    }
}