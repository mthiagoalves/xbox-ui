import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { error } from 'console';
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

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Id '${id}' is not found, please check`);
    }

    return record;
  }

  findOne(id: string): Promise<Game> {
    return this.findById(id);
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const game: Game = { ...createGameDto };

    return this.prisma.game
      .create({
        data: game,
      })
      .catch(this.handleError);
  }

  async update(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    await this.findById(id);

    const data: Partial<Game> = { ...updateGameDto };

    return this.prisma.game
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.prisma.game.delete({
      where: { id },
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();

    throw new UnprocessableEntityException(lastErrorLine);
  }
}
