import { Controller, Get, Post } from '@nestjs/common';

@Controller('genre')
export class GenreController {
  @Get()
  findAll() {
    return 'Find all genres';
  }

  @Post()
  create() {
    return 'Create a genre';
  }
}
