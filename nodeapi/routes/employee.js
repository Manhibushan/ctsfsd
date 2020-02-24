


const express=require('express');



const router=express.Router();


const Employee=require('../models/employee')



//** get employee details
router.get('/',async (req,res)=>{
// connect


const employees= await Employee.find()
try {
    res.status(200).json({
    error : false,
    data: employees        
})
    
} catch (error) {
    res.status(200).json({
        error : true,
        message :error.message
           
    })
}

    //let id=req.params.id;
    
    //console.log(id);
    
})

router.get('/:id',async (req,res)=>{
    // connect
    
    
    const employees=await Employee.findById(req.params.id,{
        
    })
    
    try {
        res.status(200).json({
        error : false,
        data: employees        
    })
        
    } catch (error) {
        res.status(200).json({
            error : true,
            message :error.message
               
        })
    }
    
        //let id=req.params.id;
        
        //console.log(id);
        
    })



router.post('/',async(req,res)=>{


const emp=req.body;

console.log(emp);
const doc= await Employee.create(emp)

try {
    res.status(201).json({
        error : false,
        data  : doc
    })
} 
catch (error) {
    res.status(400).json({
    error:true,
    message:error.messages
    })
    
}





   
})
router.put('/:id',async(req,res)=>{


    const employee=await Employee.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators :true
    })
    if(!employee)
    {
        res.status(404).json({
            error :true,
            message:"employee id does not exist"
        })
    }
    try {
        res.status(200).json({
            error:false,
            data:employee
        })
    } catch (error) {
        res.status(400).json({
            error: true,
            message:error.message
        })
    }



    res.status(200).json({
        error : false,
        message :'update   employees'
        
    })
})
router.delete('/:id',async(req,res)=>{


const employee=await Employee.findByIdAndDelete(req.params.id,{
    
})


   
})


module.exports=router;















