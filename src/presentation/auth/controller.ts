import { Response , Request } from "express"
import { RegisterUserDto } from "../../domain";

export class AuthController {

   //inyecion de dependencias
   constructor() {}


   registerUser = (  req:Request, res:Response ) => {

      const [error , registerUserDto] = RegisterUserDto.create(req.body) 

      if(error) return res.status(400).json(error)

         res.status(200).json(registerUserDto)


   };


   loginUser =  ( req:Request, res:Response ) => {

    res.json('controller login');

   }

}