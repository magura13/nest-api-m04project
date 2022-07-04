import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @ApiProperty({
    description: 'The name of the event',
    example: 'Le Tour de France',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'The description of the event',
    example: 'Le Tour de France was created by Rogérinho do Ingá at 1921...',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'The genres of the event MTB | ROAD',
    example: 'ROAD',
  })
  genres: string;

  @IsUrl()
  @ApiProperty({
    description: 'Youtube video URL of the event',
    example: 'https://www.youtube.com/watch?v=vjci1lf0fj4',
  })
  trailers: string;

  @IsUrl()
  @ApiProperty({
    description: 'URL image of the event',
    example:
      'https://image.api.playstation.com/vulcan/ap/rnd/202205/0412/NtQiLg5cDQCb9xy2QVE3Fuyg.jpg',
  })
  image: string;
}
