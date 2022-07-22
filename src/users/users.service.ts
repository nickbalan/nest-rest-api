import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    //Local strategy
    {
      id: 1,
      name: 'User1',
      username: 'user1',
      password: 'not_secured',
    },
    {
      id: 2,
      name: 'User2',
      username: 'user2',
      password: 'not_secured',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
