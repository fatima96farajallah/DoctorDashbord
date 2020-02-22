const mongoose=require('mongoose');
let doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required:'This field is required.'
    },
    email: {
        type:String
    },
    mobile : {
        type:String
    },
    major :{
        type:String
    }
});
mongoose.model('doctor',doctorSchema);
