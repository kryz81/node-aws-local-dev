import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../model/UserDto';
import { UsersService } from '../services/users.service';
import { User } from '../model/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    console.log('test');
    return this.usersService.getUsers();
  }

  @Post()
  async addUser(@Body() userDto: UserDto) {
    await this.usersService.addUser(userDto);
  }
}
