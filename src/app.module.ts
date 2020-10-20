import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PicturesModule } from './pictures/pictures.module';

@Module({
  imports: [UsersModule, PicturesModule],
})
export class AppModule {}
