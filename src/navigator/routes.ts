const stackName: StackName = {
  login: 'LOGIN',
  register: 'REGISTER',
  home: 'HOME',
};

type RootStackParamList = {
  LOGIN: undefined;
  REGISTER: {user: 'ABC'};
  HOME: undefined;
};

type StackName = {
  login: 'LOGIN';
  register: 'REGISTER';
  home: 'HOME';
};
// type NamesType = keyof typeof names;

export type {RootStackParamList, StackName};
export {stackName};
