const express=require('express');
const router=express.Router();
const path=require('path');
const { selectExercisesByUserID } = require('../controllers/crud');
const { getAPI } = require('../controllers/mainController');

const global = require('../utils/session');


router.get('/',(req,res)=>
{

    getAPI();
    const allExercise = selectExercisesByUserID(global.getVarGlobal("getId"));
    res.render('main',{allExercise}); 
    
})



module.exports=router;  
