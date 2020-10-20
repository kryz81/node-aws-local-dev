import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { DynamoDbUsersRepository } from './repositories/DynamoDbUsersRepository';
import { UsersService } from './services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, { provide: 'UsersRepository', useClass: DynamoDbUsersRepository }],
})
export class UsersModule {}
