const express =require('express');
const mongoose = require('mongoose');
const doctor = mongoose.model('doctor');
let router = express.Router();
router.get('/',(req,res)=> {
    res.render('doctor/addOreditDector.hbs',
    {
        style :'addstyle.css',
        viewTitle : "Create Doctor"

    });
});
router.post('/',(req,res) => {
    if(req.body._id=='')
    insertRecord(req,res);
    else 
    updateRecord(req,res);
});
function insertRecord(req,res) {
    let dr = new doctor();
    dr.name=req.body.name;
    dr.email=req.body.email;
    dr.mobile=req.body.mobile;
    dr.major=req.body.major;
    dr.save((err,doc)=>{
        if(!err)
             res.redirect('doctor/list');
        else {
             console.log('Error during record insertion : ' + err);
             }
    });
}



function updateRecord(req, res) {
    doctor.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('doctor/list'); }
            else {
                console.log('Error during record update : ' + err);
        }
    });
}

router.get('/list',(req,res)=>{       
        doctor.find((err,doc)=> {
            if(!err){
                res.render('doctor/list.hbs', {
                    list:doc,
                    style:'liststyle.css'
                    });
            }
            else {
                console.log('Error in retriveing doctor list : '+ err);
            }
        });
});

router.get('/dashbord',(req,res) => {
    res.render('doctor/dashbord.hbs',{
        style:'dashbord.css'
    });
});

router.get('/:id', (req, res) => {
    doctor.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("doctor/addOreditDector.hbs", {
                style:'addstyle.css',
                viewTitle: "Update Doctor",
                doctor: doc
            });
        }
    });
});


router.get('/delete/:id', (req, res) => {
    doctor.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/doctor/list');
        }
        else { console.log('Error in doctor delete :' + err); }
    });
});

module.exports=router;