import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';

@ApiTags('Genre')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  @ApiOperation({
    summary: 'Find all genres',
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':genre')
  @ApiOperation({
    summary: 'Find genre for Id',
  })
  findOne(@Param('genre') genre: string): Promise<Genre> {
    return this.genreService.findOne(genre);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a genre',
  })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }
}
