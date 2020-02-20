const express =require('express');
let router = express.Router();
router.get('/',(req,res)=> {
res.json('Hellloe');

});
module.exports=router;