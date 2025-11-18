const express=require("express");
const router=express.Router();
const db=require("../config/db");
router.get("/:id",(req,res)=>{
 db.query("SELECT * FROM students WHERE student_id=?",[req.params.id],(err,result)=>{
  if(result.length===0) res.json({status:"invalid"});
  else res.json({status:"valid",data:result[0]});
 });
});
module.exports=router;