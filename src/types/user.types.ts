export type User = {
  username: string;
  password: string;
  email: string;
  profilePicId: string;
  id: number;
};

export interface ILogin {
  username: string;
  password: string;
}
