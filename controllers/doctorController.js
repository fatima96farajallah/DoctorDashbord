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
})
router.post('/',(req,res) => {
    insertRecord(req,res);
});
function insertRecord(req,res) {
    let dr = new doctor();
    dr.name=req.body.name;
    dr.email=req.body.email;
    dr.password=req.body.password;
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
router.get('/list',(req,res)=>{        
        res.render('doctor/list.hbs', {
            style:'liststyle.css'
            });
})
module.exports=router;