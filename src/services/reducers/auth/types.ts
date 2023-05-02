import {ResponseStateType} from 'helpers/handleReducer';
import type {Errors, ResponseErrors} from '../global/type';

interface LoginRequest {
  email: string;
  password: string;
}

interface UserType {
  id: string;
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}
interface User {
  user: UserType;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface AuthState {
  user?: ResponseUser | null;
  accessToken?: string | null | undefined;
  login: ResponseStateType<User, ResponseErrors>;
}

interface ResponseLogin {
  accessToken: string;
}

interface ResponseUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  password: string;
  created: number;
  updated: number;
}
interface AccessToken {
  accessToken: string;
}

export type {
  AuthState,
  User,
  LoginRequest,
  RegisterRequest,
  UserType,
  ResponseLogin,
  ResponseUser,
  AccessToken,
};
