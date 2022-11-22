export type User = {
  username: string;
  password: string;
  email: string;
  profilePicId?: string;
  id: number;
  date?: Date;
  description?: string;
  profilePic?: ProfilePic;
};

export type ProfilePic = {
  id: string;
  path?: string;
};
export interface ILogin {
  username: string;
  password: string;
}
