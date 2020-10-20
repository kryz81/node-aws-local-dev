import { User } from '../model/User';
import { UserDto } from '../model/UserDto';

export interface UsersRepository {
  getUsers(): Promise<User[]>;
  addUser(user: UserDto): void;
}
