import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../model/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
