const express=require("express");
const router=express.Router();
const db=require("../config/db");
router.get("/login",(req,res)=>res.render("admin-login"));
router.post("/login",(req,res)=>{
 const {email,password}=req.body;
 db.query("SELECT * FROM admin WHERE email=? AND password=?",[email,password],(err,result)=>{
  if(result.length>0) res.redirect("/admin/dashboard");
  else res.send("Invalid Credentials");
 });
});
router.get("/dashboard",(req,res)=>{
 db.query("SELECT * FROM students ORDER BY id DESC",(err,data)=>res.render("admin-dashboard",{students:data}));
});
module.exports=router;