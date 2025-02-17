import { isString, IsEmail, MinLength, IsString } from "class-validator"


export class CreateUserDto {
    @IsString()
    userName:string
    @IsString()
    @MinLength(6)
    password:string

    @IsEmail()
    email:string
}
