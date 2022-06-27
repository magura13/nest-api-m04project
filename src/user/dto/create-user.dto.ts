import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

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

  cpf: number;

  @IsBoolean()
  admin: boolean;
}
