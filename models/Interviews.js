const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },
    studentId:{
        ref:'Students',
    }
    
},{
    timestamps:true
});


const Interviews = mongoose.model('Interviews',InterviewSchema);

module.exports=Interviews;