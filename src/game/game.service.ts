import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './dto/entities/game.entity';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

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

  update(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    const data: Partial<Game> = { ...updateGameDto };

    return this.prisma.game.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.game.delete({
      where: { id },
    });
  }
}
