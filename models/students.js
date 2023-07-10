const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    batch:{
        type:String,
        // required:true,
    },
    DSAFinalScore:{
        type:Number,
    },
    WebDevFinalScore:{
        type:Number,
    },
    ReactFinalScore:{
        type:Number,
    },
    interviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Interview',
    }],
    interviewResults: [{
        interview: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Interview',
        },
        result: {
          type: String,
          enum: ['Pass', 'Fail'],
        },
      }],
    
},{
    timestamps:true
});


const Students = mongoose.model('Student',studentSchema);

module.exports=Students;