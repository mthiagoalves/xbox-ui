import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Id '${id}' is not found, please check`);
    }
    return record;
  }

  findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.confirmPassword) {
      throw new BadRequestException('This passwords is not a match');
    }

    delete createUserDto.confirmPassword;

    const user: User = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    return this.prisma.user
      .create({
        data: user,
      })
      .catch(this.handleError);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    if (updateUserDto.password) {
      if (updateUserDto.password != updateUserDto.confirmPassword) {
        throw new BadRequestException('This passwords is not a match');
      }
    }

    delete updateUserDto.confirmPassword;

    const user: Partial<User> = { ...updateUserDto };

    if (user.password) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.user
      .update({
        where: { id },
        data: user,
      })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({
      where: { id },
    });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();

    if (!lastErrorLine) {
      console.error(error);
    }

    throw new UnprocessableEntityException(lastErrorLine);
  }
}
