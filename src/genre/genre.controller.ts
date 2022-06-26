import { Controller, Get, Post } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Post()
  create(createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }
}
