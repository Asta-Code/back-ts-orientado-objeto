 

//para definir reglas

import { RegisterUserDto } from "../dtos/auth/register-user.dtos";
import { UserEntity } from "../entities/user.entiti";

export  abstract class AuthDatasource {


    //todo

    //abstract logi( loginUserDto:LoginUserDto):Promise<UserEntity>

    //RegisterUserDto por si hay cambios  solo tendria que aplicarse en el mismo
    abstract register( registerUserDto:RegisterUserDto):Promise<UserEntity>




}