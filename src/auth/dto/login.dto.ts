import { isString, IsEmail, MinLength, IsString } from "class-validator"


export class login {
    @IsString()
    userName:string
    @IsString()
    @MinLength(6)
    password:string
}
