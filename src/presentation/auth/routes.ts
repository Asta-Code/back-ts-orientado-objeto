import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthoRepositoryImpl } from "../../infrastructure";




export class AuthRoutes {

    static get routes(): Router {

        const router = Router()
        const authDatasource = new AuthDatasourceImpl();
        const authRepository = new AuthoRepositoryImpl(authDatasource);
        const controller = new AuthController(authRepository);


        // definir todas mis rutas principales 
        router.post('/login', controller.loginUser );

        router.post('/register',  controller.registerUser);
        
    
    
    

        return  router;
    
    }


}