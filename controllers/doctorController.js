const express =require('express');
let router = express.Router();
router.get('/',(req,res)=> {
res.json('sample Text');

});
module.exports=router;