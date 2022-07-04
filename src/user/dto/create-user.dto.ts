import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'User name',
    example: 'Tiago Lelis',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'tiagolelisdev@gmail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'User password',
    example: 'password123',
  })
  password: string;

  @IsBoolean()
  @ApiProperty({
    description: 'User is admin or not admin',
    example: true,
  })
  admin: boolean;
}
