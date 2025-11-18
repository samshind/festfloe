const express=require("express");
const router=express.Router();
const db=require("../config/db");
const QRCode=require("qrcode");
router.post("/",async(req,res)=>{
 const {name,email,phone,department,event}=req.body;
 const studentID="STU-"+Date.now();
 const qrPath=`qrcodes/${studentID}.png`;
 await QRCode.toFile(`public/${qrPath}`,studentID);
 db.query("INSERT INTO students (student_id,name,email,phone,department,event,qr_path) VALUES (?,?,?,?,?,?,?)",
  [studentID,name,email,phone,department,event,qrPath],
  err=>{if(err)throw err;res.send(`Registration Successful! Your ID: ${studentID}`);}
 );
});
module.exports=router;