import {Response, Request, NextFunction} from "express"

const apikeyauth = (req:Request , res:Response , next:NextFunction) => {
        
    let apikey = req.query.admin_token;

       if(apikey && apikey === '1234567')
        return next()
        else 
        {
        return res.json({
                status: 422,
                error: 'Not validate your request'
        })
        }
}

export default apikeyauth;
