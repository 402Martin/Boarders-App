import { User } from './user.types';

export interface ISessionForm {
  gameTitle: string;
  date: Date;
  description: string;
  location: string;
  maxQuantityPlayers: number;
  minQuantityPlayers: number;
}

export type Session = {
  id: number;
  gameTitle: string;
  date: Date;
  location: string;
  maxQuantityPlayers: number;
  minQuantityPlayers: number;
  players: User[];
  host: User;
};
