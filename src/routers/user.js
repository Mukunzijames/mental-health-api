
import express from "express";
import User from "../Models/auth/user";
import bcrypt from "bcrypt"
import multer from "multer"
import middlewares from "../middleware/middlewares";
import Appointment from "../Models/availability";



const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Document")
    }, filename(req, file, cb) {
        cb(null, file.originalname)
    },
});

const upload = multer({ storage: storage })


router.post("/register", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt)
  
      const newUser = new User({
        Names: req.body.Names,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        Gender:req.body.Gender,
        password: hashedPass,
        
      });
      const phoneNumber = await User.find({ phoneNumber: req.body.phoneNumber })
      const userEmail = await User.find({ email: req.body.email })
      if (phoneNumber.length !== 0) {
        return res.status(402).json({
          message: "this user phone number is already used"
        })
      }else if(userEmail.length!==0){
  
        return res.status(402).json({
          message: "this user Email is already used"
        })
      }
       else {
        const user = await newUser.save();
        return res.status(200).json(user);
      }
  
    } catch (err) {
     return res.status(500).json(err)
    }
  });

  router.get("/all", middlewares.middleware,async (req, res) => {
    try {
        let users = await User.find()
        users = users.filter((user)=>user.role !== "admin")
        return res.status(200).json(users)
    } catch (err) {
        return res.status(401).json(err)
    }
});
 router.post("/Appointment",async(req,res)=>{

  try {
  
    const availabilityId=userid;
    const newAppointment= new Appointment({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        Date:req.body.date, 
        time:req.body.time,
        reason:req.body.reason,
        specialty:req.body.specialty,
        availability:availabilityId.message,
        paymentMethod:req.body.paymentMethod,
        paymentAmount:req.body.paymentAmount,
        confirmationInfo:req.body.confirmationInfo,
        appointmentStatus:req.body.appointmentStatus
});
const appointment= await Appointment.find({
  name:req.body.name,
  email:req.body.email,
  phone:req.body.phone,
  Date:req.body.date, 
  time:req.body.time,
  reason:req.body.reason,
  specialty:req.body.specialty,
  availability:availabilityId.message,
  paymentMethod:req.body.paymentMethod,
  paymentAmount:req.body.paymentAmount,
  confirmationInfo:req.body.confirmationInfo,
  appointmentStatus:req.body.appointmentStatus
});
    newAppointment.save();
    return res.status(200).json({message:newAppointment})

  } catch (error) {
    return res.status(500).json('error')
  }
 });
 router.patch("/Appointment",async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
 })

export default router;