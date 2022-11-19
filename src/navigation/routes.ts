export enum routes {
  REGISTER = 'register',
  LOGIN = 'login',
  CREATE_SESSION = 'create_session',
  UPDATE_SESSION = 'update_session',
  MYSESSION = 'mySession',
  PENDINGREQUEST = 'pendingrequest',
  MYPROFILE = 'myprofile',
  SEARCH = 'search',
}

export type RootStackParamList = {
  register: undefined;
  login: undefined;
  create_session: undefined;
  mySession: undefined;
  myprofile: undefined;
  search: undefined;
  pendingrequest: { id: number };
  update_session: { id: number };
};
