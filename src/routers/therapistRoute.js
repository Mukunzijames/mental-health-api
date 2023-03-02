
import express from "express";
import Therapist from "../Models/auth/therapist";

import bcrypt from "bcrypt"
import multer from "multer"
import cloudinary from "../happer/cloudinary"


const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Document")
    }, filename(req, file, cb) {
        cb(null, file.originalname)
    },
});

const upload = multer({ storage: storage })

router.post("/register", upload.fields([{ name: 'profile_picture', maxCount: 1 }, { name: 'Degree', maxCount: 1 }], { resource_type: "raw" }), async (req, res) => {
    // try {

    try {
        let result1
        const result = await cloudinary.uploader.upload(req.files.profile_picture[0].path)
        await cloudinary.uploader.upload(req.files.Degree[0].path, { resource_type: 'raw' }).then((res) => { result1= res }).catch((err) => { console.log(err); })
        console.log(result)
        console.log(result1)
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)


        const newTherapist = new Therapist({
            Names: req.body.Names,
            email: req.body.email,
            password: hashedPass,
            phoneNumber: req.body.phoneNumber,
            location: req.body.location,
            Gender: req.body.Gender,
            therapist_type: req.body.therapist_type,
            profile_picture: result.secure_url,
            licence_number: req.body.licence_number,
            Skill: req.body.Skill,
            Degree: result1.secure_url,
            Question1: req.body.Question1,
            Question2: req.body.Question2,


        });
        const TherapistEmail = await Therapist.find({ email: req.body.email })
        if (TherapistEmail.length !== 0) {

            return res.status(402).json({
                message: "this user Email is already used"
            })
        }
        else {
            console.log("heeyyyyyyyyyyyy")
            const therapist = await newTherapist.save();
            return res.status(200).json(therapist);
        }
    } catch (error) {
        return res.status(400).json(error)
    }



    //     } catch (err) {
    //         return res.status(500).json(err)
    //     }
});

export default router;