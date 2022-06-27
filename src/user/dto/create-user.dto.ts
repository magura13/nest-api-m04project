import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Data to create user',
  })
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  cpf: number;

  @IsBoolean()
  admin: boolean;
}
