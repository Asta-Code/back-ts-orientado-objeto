import { AuthDatasource, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";



export class AuthoRepositoryImpl implements AuthRepository {
    
    constructor(
        private readonly authDatasource : AuthDatasource
    ){}
    
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
      
        return this.authDatasource.register(registerUserDto);

    }



}