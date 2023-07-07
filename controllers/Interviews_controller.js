const Interviews = require('../models/Interviews');
const Students = require('../models/students');



module.exports.Interviews = async function(req,res){
    let Interview = await Interviews.find({}).populate(
        'Students'
        ).exec();
    console.log("populate",Interview);
    let Student = await Students.find({});
   
    return res.render('Interviews',{
        title:'Interviews',
        Interviews:Interview,
        students:Student,
    })
}

module.exports.create = async function(req,res){
    try{
        let Interview = await Interviews.findOne({
            companyName:req.body.companyName,
        });
        if(Interview){
            let Student = await Students.findById(req.body.Students);
            Interview.Students.push(Student);
            Interview.save();
        }
        else
        {
            let Interview = await Interviews.create({
                companyName:req.body.companyName,
            });
            let Student = await Students.findById(req.body.Students);
            console.log("Student",Interview);
            Interview.Students.push(Student);
            Student.Interviews.push(Interview);
            Student.save();
            Interview.save();
        }
        
       
        
        

        console.log("Interview successfully created");
        return res.redirect('/students/Interviews');
    }catch(err){
         console.log("Error in creating Interview",err);
         return ;
    }
    
    
    
}