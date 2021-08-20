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
        
        return DoctorSchema.findByIdAndUpdate(id,doctor,{
            new:true
        })
    }
    delDoctor(_id:string){
        console.log(_id)
        return DoctorSchema.findByIdAndDelete(_id)
    }
    getalldoctor(){
       
        return DoctorSchema.find()
    }
}