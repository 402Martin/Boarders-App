import axios from 'src/handler/axios.handler';
import { IUserRegister } from 'src/types/main.types';
import { ILogin, User } from 'src/types/user.types';
import BaseService from './base.service';
import { endpoints } from './endpoints';

export class UserService extends BaseService<User, IUserRegister> {
  constructor() {
    super(endpoints.users);
  }

  login = async (user: ILogin) => {
    const data = await axios.post(endpoints.login, user);
    return data;
  };
}

export const userService = new UserService();
