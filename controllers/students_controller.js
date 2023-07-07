const Students = require('../models/students');
const csvParser = require('json2csv').Parser;

module.exports.create = async function(req,res){
    Students.create(req.body).then((student)=>console.log("student",student));
    let Student = await Students.find({});
    return res.render('students',{
        title:'students',
        students:Student,
        
    })
}
module.exports.StudentsPage = async function(req,res){
   let Student = await Students.find({}).clone();
   
    return res.render('students',{
        title:'students',
        students:Student,
    })
}

module.exports.exportStudent = async function(req,res){
    try{
       var Student_Array = [];

       var studentData = await Students.find({});
       
        studentData.forEach((student)=>{
            var {name,batch,DSAFinalScore,WebDevFinalScore,ReactFinalScore} = student;
            
            console.log("object",{name,batch,DSAFinalScore,WebDevFinalScore,ReactFinalScore});
            Student_Array.push({name,batch,DSAFinalScore,WebDevFinalScore,ReactFinalScore});
            
            });
      
        
        
       const csvFields=['Name','Batch','DSA Final Score','Web Dev Final Score','React Final Score'];
       const csvParse = new csvParser({ fields: csvFields, includeEmptyRows: true }); 
      
       
       const csvData = csvParse.parse(Student_Array);
       console.log(csvData);
       console.log(csvParse);
       res.setHeader("Content-Type","text/csv");
       res.setHeader("Content-Disposition","attachment : filename=StudentsData.csv");
       res.status(200).end(csvData);
    
    }catch(err){
        console.log("Error in creating csv",err);
        return ;
    }
}