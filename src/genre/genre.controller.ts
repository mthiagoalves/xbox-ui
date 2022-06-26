import { Controller, Get } from "@nestjs/common";

@Controller ('genre')
  export class GenreController {
    @Get ()
    findAll () {
      return 'Find all genres'
    }
  }
