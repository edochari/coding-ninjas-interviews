const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
    },
    Students:[{
        studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Students',
    },
      Result:{
        type:Boolean,
      }
}]
    
},{
    timestamps:true
});


const Interviews = mongoose.model('Interviews',InterviewSchema);

module.exports=Interviews;