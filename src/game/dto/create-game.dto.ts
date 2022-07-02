import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateGameDto {
  @ApiProperty({
    example: 'Elden Ring',
    description: 'Name of game',
  })
  @IsString()
  name: string;
  @ApiProperty({
    example: 'Action',
    description: 'Genre of game',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'Not',
    description: 'Multiplyear',
  })
  @IsString()
  multiplayer: string;

  @ApiProperty({
    example: '2022',
    description: 'Year of game',
  })
  @IsNumber()
  year: number;

  @ApiProperty({
    example: 'Betesda',
    description: 'Studio of create the game',
  })
  @IsString()
  studio: string;

  @ApiProperty({
    example:
      'https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png',
    description: 'Image of the game',
  })
  @IsString()
  image: string;
}
