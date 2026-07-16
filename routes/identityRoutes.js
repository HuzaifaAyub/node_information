import express from 'express';
const router = express.Router();
import Identity from './../models/identity.js';

router.post('/', async (req, res) => {
try{  
  console.log("Body:", req.body);
  const data = req.body

  const newIdentity = new Identity(data);

 const response = await newIdentity.save();
 console.log('data saved');
 res.status(200).json(response);
  }
catch(err){
  console.log(err);
  res.status(500).json({error:'Internal sever error'});

}})

router.get('/' , async (req,res)=>{
  try{
    const data = await Identity.find();
    console.log('data fetched');
 res.status(200).json(data);
  }catch(err){
     console.log(err);
  res.status(500).json({error:'Internal sever error'});
  }
})
router.get('/:skin_color', async(req,res)=>
{try{
  const skin_color = req.params.skin_color;// extract the work type form the url parameter
  if(skin_color=='Brown'){
    const response =await Identity.find({skin_color:skin_color});
    console.log("respose fetched");
    res.status(200).json(response);
  }
else{
  res.status(404).json({error:"Invalid skin type"});
}
}
  catch(err){
      console.log(err);
  res.status(500).json({error:'Internal sever error'});
  }
})
// commeennnttt
export default router