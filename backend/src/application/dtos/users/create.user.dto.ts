import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(30)
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsOptional()
  @MinLength(9)
  phone: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @IsOptional()
  role: string;
}
