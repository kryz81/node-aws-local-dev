import { User } from '../model/User';

export interface UsersRepository {
  getUsers(): Promise<User[]>;
}
