export enum routes {
  REGISTER = 'register',
  LOGIN = 'login',
  CREATE_SESSION = 'create_session',
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
};
