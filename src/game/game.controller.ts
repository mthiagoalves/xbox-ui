import { Controller, Get } from "@nestjs/common";

@Controller ('Game')
  export class GameController {
    @Get()
    findAll () {
      return 'Find all games'
    }
  }
