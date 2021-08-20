import {IPATIENT} from "../types/document/IPATIENT"
import {SaveReqPatient,UpdateReqPatient,DelReqPatient,GetReqPatient} from "../types/request/Patient.Request"
import {SaveUpdateResPatient} from "../types/response/Patient.Response"
import CustomeError from "../utils/error"
import {MainPatient} from "../repositories/Patient.repositories"
import {Get,Post,Put,Delete,SuccessResponse,Path,Route,Tags,Body} from "tsoa"

@Route('patient')
@Tags('patient')

export class PatientController {
    constructor(){}

@Post("/getpatient")
async getpatient(@Body() getreq:GetReqPatient): Promise<SaveUpdateResPatient>{
    const patient:any = await new MainPatient().getPatient(getreq._id);
    if(patient === null) throw new CustomeError(404 , "Patient Not Found")
    return <SaveUpdateResPatient>patient;
}
@Post("/savepatient")
async savepatient(@Body() savereq:SaveReqPatient):Promise<SaveUpdateResPatient>{
    const newpatient: IPATIENT = await new MainPatient().savePatient(<IPATIENT> savereq)
    return <SaveUpdateResPatient> <any> newpatient;
}
@Delete("/deletepatient")
@SuccessResponse("200","patient deleted")
async deletepatient(@Body() delreq: DelReqPatient){
    await new MainPatient().delPatient(delreq._id)
}
@Put("/updatepatient")
async updatepatient(@Body() updatereq:UpdateReqPatient):Promise <SaveUpdateResPatient>{
    const updatepatient: any = await new MainPatient().updatePatient(<IPATIENT> updatereq)
    if(updatepatient === null) throw new CustomeError(400, "Not supported")
    return <SaveUpdateResPatient> <any> updatepatient
}
}
