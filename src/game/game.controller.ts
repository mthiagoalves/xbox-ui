import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-game.dto';
import { GameService } from './game.service';

@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Find all games',
  })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one game for Id',
  })
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create game',
  })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }
}
