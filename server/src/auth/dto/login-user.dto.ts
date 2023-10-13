import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class LoginUserDto{
    @IsEmail()
    @IsString()
    email: string

    @IsString()
    password: string
}