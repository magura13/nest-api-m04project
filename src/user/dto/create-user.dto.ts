import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsString,
  IsUrl,
  Matches,
  MinLength,
} from 'class-validator';

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
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'User password',
    example: 'password123',
  })
  password: string;

  @ApiProperty({
    description: 'Confirmation of user password',
    example: 'password123',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Url to image for profile picture',
    example: 'https://avatars.githubusercontent.com/u/97927253?v=4',
  })
  image: string;

  @IsBoolean()
  @ApiProperty({
    description: 'User is admin or not admin',
    example: true,
  })
  admin: boolean;
}
