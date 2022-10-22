import axios from 'axios';
import { IUserRegister } from 'src/types/main.types';
import { ILogin, User } from 'src/types/user.types';
import BaseService from './base.service';
import { endpoints } from './endpoints';

export class UserService extends BaseService<User, IUserRegister> {
  constructor() {
    super(endpoints.users);
  }

  login = async (user: ILogin) => {
    try {
      return (await axios.post(endpoints.login, user)).data;
    } catch (error) {
      console.log(error);
    }
  };
}

export const userService = new UserService();
