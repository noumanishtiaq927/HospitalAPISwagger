import {PatientSchema} from "../model/Patient.model"
import {IPATIENT} from "../types/document/IPATIENT"

export class MainPatient {
    constructor(){}
    getPatient(_id:string){
        return PatientSchema.findById(_id)
    }
    savePatient(patient: IPATIENT){
        return new PatientSchema(patient).save()
    }
    updatePatient(patient: IPATIENT){
        return PatientSchema.findByIdAndUpdate(patient._id,patient,{
            new:true
        })
    }
    delPatient(_id:string){
        return PatientSchema.findByIdAndDelete(_id)
    }
    
}