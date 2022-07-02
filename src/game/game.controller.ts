import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './dto/entities/game.entity';
import { UpdateGameDto } from './dto/update-game.dto';
import { GameService } from './game.service';

@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Find all games',
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one game for Id',
  })
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create game',
  })
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.create(createGameDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update game for Id',
  })
  update(
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGameDto,
  ): Promise<Game> {
    return this.gameService.update(id, updateGameDto);
  }
}
