import jwt from "jsonwebtoken";
import {promisify} from "util";

export const authentication =async (req,res,next)=>{
    const {authentication} = req.headers
    if(!authentication){
        return res.status(403).json("token not vaild")
    }
    try {
        const decoded = await promisify(jwt.verify)(authentication,process.env.SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
      return res.status(401).json({ message: "Token not valid", error: error.message });
    }
     };