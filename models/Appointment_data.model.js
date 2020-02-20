const mongoose=require('mongoose');
let Appointment_dataSchema = new mongoose.Schema({

    doctor :{
        type:String
    },
    patient_name : {
        type: String
    },
    mobile: {
        type:String
    },
    phone: {
        type: String
    },
    email: {
        type:String
    },
    address:{
        type:String
    },
    date: {
        type:String
    },
    time: {
        type:String
    }
});
mongoose.model('Appointment data',Appointment_dataSchema);