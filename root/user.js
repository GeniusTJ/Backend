const express = require('express');
const {createUser} = require('../db/db');
const router = express.Router();

//create user
router.post('/createUser',async(req,res)=>{
    const {success,data} =await createUser(req.body);
    if(success){
        return res.json({success,data});
    }
        return res.status(500).json({success:false,message:'Error'});
    
});

module.exports = router;