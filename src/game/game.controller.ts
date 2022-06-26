import { Controller, Get, Post } from '@nestjs/common';

@Controller('Game')
export class GameController {
  @Get()
  findAll() {
    return 'Find all games';
  }

  @Post()
  create() {
    return 'Create a game';
  }
}
