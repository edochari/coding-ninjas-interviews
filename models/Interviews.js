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
        
        
        type:mongoose.Schema.Types.ObjectId,
        ref:'Students',
    
}]
    
},{
    timestamps:true,
    
});


const Interviews = mongoose.model('Interviews',InterviewSchema);

module.exports=Interviews;