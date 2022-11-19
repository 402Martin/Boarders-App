export type User = {
  username: string;
  password: string;
  email: string;
  profilePicId: string;
  id: number;
  date?: Date;
};

export interface ILogin {
  username: string;
  password: string;
}
