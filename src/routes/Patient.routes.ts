import express from 'express'
import {PatientController} from "../controller/Patient.controller"
import {IPATIENT} from "../types/document/IPATIENT"
import {SaveReqPatient,UpdateReqPatient,DelReqPatient,GetReqPatient} from "../types/request/Patient.Request"
import {SaveUpdateResPatient} from "../types/response/Patient.Response"
import CustomeError from "../utils/error"

export class PatientRoutes {
    router:express.Router
    constructor(){
        this.router= express.Router()
        this.routes()
    }
    routes(){
        this.router.post('/getpatient',async(req,res,next)=>{
            try {
               const getreq:GetReqPatient = req.body
               const patient:SaveUpdateResPatient = await new PatientController().getpatient(getreq)
               res.send(patient)
            } catch (error) {
                next(error)
            }
        })
        this.router.post('/savepatient', async(req,res,next)=>{
            try {
                const patient:SaveReqPatient = req.body
                const newpatient:SaveUpdateResPatient = await new PatientController().savepatient(patient)
                res.json({
                    message:'doctor added successfully',
                    newpatient
                })
            } catch (error) {
                next(error)
            }
        });
        this.router.put('/updatepatient',async(req,res,next)=>{
            try {
                const patient:UpdateReqPatient= req.body
                const updatepatient:SaveUpdateResPatient = await new PatientController().updatepatient(patient)
                res.json({
                    message:"patient details updated",
                    updatepatient
                })
            } catch (error) {
                next(error)
            }
        })
        this.router.delete('/deletepatient',async(req,res,next)=>{
            try {
                const delreq:DelReqPatient = req.body
                await new PatientController().deletepatient(delreq)
                res.json({
                    message:"patient details deleted"
                })
            } catch (error) {
                next(error)
            }
        })
    }
}

export const PatientRoutesApi = new PatientRoutes().router;