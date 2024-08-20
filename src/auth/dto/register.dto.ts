import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class RegisterDto {
  @ApiProperty({ example: 'Tursunboyev Shakhboz' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  fullName: string;

  @ApiProperty({ example: 'shakhboztursunboyev@gmail.com' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '********' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
