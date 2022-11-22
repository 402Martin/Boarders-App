import { RequestOut } from './request.model.types';
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

export type GameSession = {
  createdAt: Date;
  date: Date; //
  deletedAt: null;
  description: string;
  gameTitle: string;
  id: number;
  location: string;
  maxQuantityPlayers: number;
  minQuantityPlayers: number;
  requirements?: string;
  updatedAt: Date;
  requests?: RequestOut[];
  userId: number;
};

export type GameSessionIn = {
  createdAt: Date;
  date: Date; //
  deletedAt: null;
  description: string;
  gameTitle: string;
  id: number;
  location: string;
  maxQuantityPlayers: number;
  minQuantityPlayers: number;
  updatedAt: Date;
  userId: number;
};
