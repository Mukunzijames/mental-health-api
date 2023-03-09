import { mailer } from "../happer/email";
import User from "../Models/auth/user";
import therapy from "../Models/auth/therapist"
import uuid from "uuid"
import express from "express";
const router = express.Router();
import crypto from "crypto"
import forge from "../Models/forgetpassword"

router.post("/forget", async(req, res)=> {
        try {
            
            // const code = crypto.randomBytes(10).toString('hex')
            const code= Math.round(Math.random()*899999 + 100000)
            const  email = req.body.email
            const userEmail = await User.find({email})
            const therapi = await therapy.find({email})

            console.log(userEmail)

            if (userEmail.length !== 0 || therapi.length !==0) {
             //const users = await forge.findOne({user:userEmail._id || therapi._id })
              const users= new forge({
                
                 user: userEmail[0]._id,
                code: code
              })
              
            await mailer(email, `Code to use: ${code}`);
            users.save()
            
             
            return res.status(201).json({ status: "success", message:` Email send to ${email}` });
            }else{
                return res.json({
                    status:"Failed",
                    message:"This email not Exit"
                })
            }
        } catch (error) {
            return res.status(401).json({ status: "error", error: error.message });
        }
  })


export default router;