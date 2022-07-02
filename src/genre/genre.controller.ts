import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
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

  @Get(':id')
  @ApiOperation({
    summary: 'Find genre for Id',
  })
  findOne(@Param('id') id: string): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a genre',
  })
  create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(createGenreDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a genre for Id',
  })
  update(
    @Param('id') id: string,
    @Body() UpdateGenreDto: UpdateGenreDto,
  ): Promise<Genre> {
    return this.genreService.update(id, UpdateGenreDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a genre for Id',
  })
  delete(@Param('id') id: string) {
    this.genreService.delete(id);
  }
}
