import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePerfilDto {
  @IsString()
  @ApiProperty({
    description: 'Title to you perfil',
    example: "My perfil gamming"
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: ""
  })
  imgUrl: string;
}
