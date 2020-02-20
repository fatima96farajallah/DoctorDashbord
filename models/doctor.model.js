const mongoose=require('mongoose');
let doctorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type:String
    },
    password: {
        type: String
    },
    age : {
        type:String
    },
    major :{
        type:String
    }
});
mongoose.model('doctor',doctorSchema);
