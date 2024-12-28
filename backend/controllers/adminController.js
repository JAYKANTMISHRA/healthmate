
import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'

import doctorModel from './../models/doctorModel.js';

//api for adding doctor

const addDoctor =async(req,res)=>{
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address}=req.body
        const imageFile=req.file
        //cheking for all data to add doctor
       
        if(!name|| !email || !password || !speciality || !degree || !experience|| !about || !fees || !address){
              return res.json({success:false,message:"missing data"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"enter valid email"})
        } 

        //validating strong password
        if(password.length<8){
            return res.json({success:false,message:"enter strong password"})
        }
        //hash doctor password
        const salt =await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        //upload image to cloudinary
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl=imageUpload.secure_url
          
        const doctorData={
            name,
            email,
            image:imageUrl,
            password :hashedPassword,
            speciality
            ,degree
            ,experience
            ,about
            ,fees
            ,address:JSON.parse(address)
            ,date:Date.now()
        }
            const newDoctor = new doctorModel(doctorData)
            await newDoctor.save()
        
            res.send({success :true,message:"doctor added"})

        
    } catch (error) {
        console.log(error)
        res.json({success:false ,message:error.message})
    }
}

export {addDoctor}