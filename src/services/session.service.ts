import axios from 'src/handler/axios.handler';
import { ISessionForm, Session } from 'src/types/session.types';
import BaseService from './base.service';
import { endpoints } from './endpoints';

export class SessionService extends BaseService<Session, ISessionForm> {
  constructor() {
    super(endpoints.users);
  }

  createSession = async (session: ISessionForm) => {
    return (await axios.post(endpoints.createGameSession, session)).data;
  };
}

export const sessionService = new SessionService();
