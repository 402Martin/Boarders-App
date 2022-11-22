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

export interface IAlarm {
  message: string;
  type?: PaletteScale;
}

export type Filters = {
  location: {
    value: string;
    label: string;
  };
  gameTitle: {
    value: string;
    label: string;
  };
  from: {
    value: string;
    label: string;
  };
  to: {
    value: string;
    label: string;
  };
};

export type FilterParam = {
  [elem in keyof Filters]: string;
};
