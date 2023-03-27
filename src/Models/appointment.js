import mongoose from "mongoose";

 const appointmentSchema= new mongoose.Schema({
        patient:{
        name:{
         type:String,
         required:true
        },
        email:{
         type:String,
         required:true
        },
        phone:{
         type:String,
         equired:true
        },
        },
        AppointmentInfo:{
        Date:{
         type:String,
         required:true
        },
        time:{
        type:String,
        required:true
        },
        reason:{
        type:String,
        required:true
        },

        },
        TherapistInfo:{
        Name:{  
        type:String,
        required:true
        },
        specialty:{
        type:String,
        required:true
        },
        availability:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
        },
        },
        paymentInformation:{
        paymentMethod:{
        type:String,
        required:true
        },
        paymentAmount:{
        type:String,
        required:true
        },
        confirmationInfo:{
        type:String,
        required:true
        },
        },
        appointmentStatus:{
        type:String,
        required:true
        },
 },{
    timestamps:true
 });
 const Appointment=mongoose.model("Appointment",appointmentSchema)

 export default Appointment
