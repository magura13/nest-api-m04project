import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { EventModule } from './event/event.module';
import { ProfileModule } from './profile/profile.module';
import { GenresModule } from './genres/genres.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [UserModule, PrismaModule, EventModule, ProfileModule, GenresModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
