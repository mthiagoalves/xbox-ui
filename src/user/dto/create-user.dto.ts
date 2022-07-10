import { ApiProperty } from '@nestjs/swagger';
import {
  isBoolean,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Thiago Alves',
    description: 'Your name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Suicide',
    description: 'Your username, is unique, ',
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
  @IsUrl()
  image: string;

  @ApiProperty({
    example: 'Abcd@1234',
    description: 'Your password',
  })
  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Your password is weak',
  })
  password: string;

  @ApiProperty({
    example: 'Abcd@1234',
    description: 'Confirm your password',
  })
  confirmPassword: string;

  @ApiProperty({
    example: 'false',
    description: 'Permission of the user',
  })
  isAdmin: boolean;
}
