import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PerfilModule } from './perfil/perfil.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [GameModule, GenreModule, PrismaModule, UserModule, PerfilModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
