import { IUserRegister } from 'src/types/main.types';
import { User } from 'src/types/user.types';
import BaseService from './base.service';
import { endpoints } from './endpoints';

export class UserService extends BaseService<User, IUserRegister> {
  constructor() {
    super(endpoints.users);
  }
}

export const userService = new UserService();
