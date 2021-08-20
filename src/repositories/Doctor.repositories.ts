import {DoctorSchema} from "../model/Doctor.model"
import {IDOCTOR} from "../types/document/IDOCTOR"

export class MainDoctor {
    constructor(){}
    getDoctor(_id:string){
        
        return DoctorSchema.findById(_id)
    }
    saveDoctor(doctor: IDOCTOR){
        return new DoctorSchema(doctor).save()
    }
    updateDoctor(id:string ,doctor: IDOCTOR){
        console.log({id,doctor})
        return DoctorSchema.findByIdAndUpdate(id,doctor,{
            new:true
        })
    }
    delDoctor(_id:string){
        return DoctorSchema.findByIdAndDelete(_id)
    }
    getalldoctor(){
       
        return DoctorSchema.find()
    }
}