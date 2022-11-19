import { User } from './user.types';

export type CreateRequest = {
  gameSessionId: number;
  userId: number;
};

export type RequestModel = {
  gameSessionId: number;
  userId: number;
  id: number;
  status?: RequestStatus;
};

export type RequestOut = {
  id: number;
  gameSessionId: number;
  userId: number;
  status: RequestStatus;
  createdAt?: Date;
  deletedAt?: Date | null;
  updatedAt?: Date;
  user: User;
};
export enum RequestStatus {
  PENDING = 0,
  ACCEPTED = 1,
  REJECTED = 2,
}
