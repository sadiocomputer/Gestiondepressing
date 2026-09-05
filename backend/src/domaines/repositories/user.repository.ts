import { User } from '../entities/user.entity';

export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}

export interface IUserRepository {
  create(user: IUser): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

export const USER_REPOSITORY = 'USER_REPOSITORY';
