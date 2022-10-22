import { PaletteScale } from 'src/styles/types';

export interface IUserRegister {
  username: string;
  password: string;
  email: string;
}

export interface IMessage {
  message: string;
  type: PaletteScale;
}
