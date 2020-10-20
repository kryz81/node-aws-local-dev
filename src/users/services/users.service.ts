import { Inject, Injectable } from '@nestjs/common';
import { User } from '../model/User';
import { UserDto } from '../model/UserDto';
import { UsersRepository } from '../repositories/UsersRepository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }

  async addUser(user: UserDto) {
    this.usersRepository.addUser(user);
  }
}
