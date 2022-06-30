import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'User is admin or not admin',
  })
  @IsBoolean()
  admin: boolean;
}
