import { RequestOut } from './request.model.types';

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
};
