import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";




export class AuthDatasourceImpl implements AuthDatasource  {

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
       

        const { email , name , password} = registerUserDto


        try {

            //1- Verificar si el Correo existe
""
            // if("droidjr10@gmail.co" === email) throw CustomError.badRequest('correo ya existe');

            // 2- Has la contraseña



            //3-Mapear la respuesta de nuestra entidad
            

            return new UserEntity(
                "1",
                name ,
                email,
                password,
                ["ADMIN_ROLE"]
            )
        } catch (error) {
            if(error  instanceof CustomError){
                throw error
            }
            throw CustomError.internalServer()
        }
    }


}