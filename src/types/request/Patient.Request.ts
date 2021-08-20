export interface SaveReqPatient{
    name:string,
    email:string,
    password:string,
    phone:string,
    disease:string[],
    avatar?:string,
}

export interface GetReqPatient{
    _id:string
}
export interface UpdateReqPatient{
    _id:string,
    name?:string,
    email?:string,
    phone?:string,
    disease?:string[],
    avatar?:string,
}
export interface DelReqPatient{
    _id:string
}