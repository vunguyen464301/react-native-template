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
interface UserErrors {
  errors: Record<string, string>;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface ResponseUserError {
  data: UserErrors;
  status: number;
}

interface AuthState {
  user?: ResponseUser | null;
  accessToken?: string | null | undefined;
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

export type {
  AuthState,
  User,
  LoginRequest,
  UserErrors,
  RegisterRequest,
  UserType,
  ResponseUserError,
  ResponseLogin,
  ResponseUser,
};
