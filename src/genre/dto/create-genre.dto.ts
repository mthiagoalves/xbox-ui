import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({
    description: 'Genre of Game',
    example: 'Action',
  })
  @IsString()
  genre: string;
}
