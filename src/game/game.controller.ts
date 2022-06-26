import { Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('Game')
export class GameController {
  constructor(private gameService: GameService) {}
  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Post()
  create() {
    return this.gameService.create()
  }
}
