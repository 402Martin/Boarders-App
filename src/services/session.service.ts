import axios from 'src/handler/axios.handler';
import { GameSession, ISessionForm, Session } from 'src/types/session.types';
import BaseService from './base.service';
import { endpoints } from './endpoints';

export class SessionService extends BaseService<GameSession, ISessionForm> {
  constructor() {
    super(endpoints.createGameSession);
  }

  createSession = async (session: ISessionForm) => {
    return (await axios.post(endpoints.createGameSession, session)).data;
  };
}

export const sessionService = new SessionService();
