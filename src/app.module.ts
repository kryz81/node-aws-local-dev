import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PicturesModule } from './pictures/pictures.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, PicturesModule, UtilsModule],
})
export class AppModule {}
