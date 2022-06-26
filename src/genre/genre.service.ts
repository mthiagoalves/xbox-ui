import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';

@Injectable()
export class GenreService {
  findAll() {
    return 'Find all genres';
  }

  create(createGenreDto: CreateGenreDto) {
    return 'create a genre' + JSON.stringify(createGenreDto);
  }
}
