const express=require('express')
const app=express();
const router = express.Router();
const db=require('./model')
app.get('/',(req,res)=>{
    try {
        const check = db.studentDb.findOne({ email: req.body.email }).exec();
        if (check.password == req.body.password && check.name==req.body.name 
            && check.reg_no==req.body.reg_no && check.hostalname==req.body.hostalname) {
          res.send("login successfull");
        } else {
          res.send("incorrect details");
        }
      } catch (e) {
        res.send("username not found");
        console.log(e);
      }
});

module.exports=app;
module.exports=router;