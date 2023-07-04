const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    batch:{
        type:String,
        required:true,
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
    Interviews:{
        ref:'Interviews'
    },
    
},{
    timestamps:true
});


const Students = mongoose.model('Students',studentSchema);

module.exports=Students;