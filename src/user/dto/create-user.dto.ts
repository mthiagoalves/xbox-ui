import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Thiago Alves',
    description: 'Your name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Suicide',
    description: 'Your username, is unique',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'm.thiago.alves@live.com',
    description: 'Your email, is unique',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: 'https://avatars.githubusercontent.com/u/97460632?v=4',
    description: 'Your photo link',
  })
  @IsString()
  image: string;

  @ApiProperty({
    example: '123@nome92',
    description: 'Your password',
  })
  @IsString()
  password: string;
}
