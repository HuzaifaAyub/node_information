import express from 'express';
const router = express.Router();
import Person from './../models/person.js';

router.post('/', async (req, res) => {
try{  
  console.log("Body:", req.body);
  const data = req.body

  const newPerson = new Person(data);

 const response = await newPerson.save();
 console.log('data saved');
 res.status(200).json(response);
  }
catch(err){
  console.log(err);
  res.status(500).json({error:'Internal sever error'});

}
})

// Get method to get the person
router.get('/' , async (req,res)=>{
  try{
    const data = await Person.find();
    console.log('data fetched');
 res.status(200).json(data);
  }catch(err){
     console.log(err);
  res.status(500).json({error:'Internal sever error'});
  }
})

router.get('/:profession', async(req,res)=>
{try{
  const profession = req.params.profession;// extract the work type form the url parameter
  if(profession=='Doctor'|| profession == 'Manager'){
    const response =await Person.find({profession:profession});
    console.log("respose fetched");
    res.status(200).json(response);
  }
else{
  res.status(404).json({error:"Invalid profession type"});
}
}
  catch(err){
      console.log(err);
  res.status(500).json({error:'Internal sever error'});
  }
})

router.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id; //extract the id from the url parameter
        const updatedPersonData= req.body;//updated data for the person

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//return the updated documnet
            runValidators:true,//run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:"Person not found"})
        }
        console.log('data updated');
        res.status(200).json(response);

    }
    catch(err){
          console.log(err);
  res.status(500).json({error:'Internal sever error'});
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id.trim();
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
    }
    catch(err){
        console.log(err);
  res.status(500).json({error:'Internal sever error'});
    }
})


export default router