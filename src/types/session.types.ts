import { User } from './user.types';

export interface ISessionForm {
  game: string;
  datetime: Date;
  location: string;
  maxPlayers: number;
  minPlayers: number;
}

export type Session = {
  id: number;
  game: string;
  datetime: Date;
  location: string;
  maxPlayers: number;
  minPlayers: number;
  players: User[];
  host: User;
};
