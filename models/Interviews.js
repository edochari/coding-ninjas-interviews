const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
    },
    students:[{
        
        
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
    
}]
    
},{
    timestamps:true,
    
});


const Interviews = mongoose.model('Interview',InterviewSchema);

module.exports=Interviews;