import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({
      where: {
        id,
      },
    });
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const game: Game = { ...createGameDto };

    return this.prisma.game.create({
      data: game,
    });
  }
}
