import { Test } from '@nestjs/testing';
import { User } from '../model/User';
import { UsersService } from './users.service';

describe('CatsController', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'UsersRepository',
          useValue: {
            async getUsers(): Promise<User[]> {
              return [{ id: '1', name: 'Test User', age: 60, enabled: true }];
            },
          },
        },
      ],
    }).compile();

    usersService = await moduleRef.get<UsersService>(UsersService);
  });

  describe('getUsers', () => {
    it('returns user list', async () => {
      const result = await usersService.getUsers();

      console.log('env: ', process.env.NODE_ENV);

      expect(result).toEqual([{ id: '1', name: 'Test User', age: 60, enabled: true }]);
    });
  });
});
