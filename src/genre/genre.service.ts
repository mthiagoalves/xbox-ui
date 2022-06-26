import { Injectable } from '@nestjs/common';

@Injectable()
export class GenreService {
  findAll() {
    return 'Find all genres';
  }

  create() {
    return 'create a genre'
  }
}
