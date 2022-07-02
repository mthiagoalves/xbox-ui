import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  async findById(id: string): Promise<Genre> {
    const record = await this.prisma.genre.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Id '${id}' is not found, please check`);
    }
    return record;
  }

  findOne(id: string): Promise<Genre> {
    return this.findById(id);
  }

  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre: Genre = { ...createGenreDto };

    return this.prisma.genre
      .create({
        data: genre,
      })
      .catch(this.handleError);
  }

  async update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    await this.findById(id);

    const genre: Partial<Genre> = { ...updateGenreDto };

    return this.prisma.genre
      .update({
        where: { id },
        data: genre,
      })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.genre.delete({
      where: { id },
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();

    throw new UnprocessableEntityException(lastErrorLine);
  }
}
