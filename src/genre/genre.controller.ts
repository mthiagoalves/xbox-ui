import { Controller, Get, Post } from '@nestjs/common';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Post()
  create() {
    return this.genreService.create();
  }
}
