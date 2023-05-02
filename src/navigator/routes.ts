const stackName: StackName = {
  login: 'LOGIN',
  register: 'REGISTER',
};

type RootStackParamList = {
  LOGIN: undefined;
  REGISTER: {user: 'ABC'};
};

type StackName = {
  login: 'LOGIN';
  register: 'REGISTER';
};
// type NamesType = keyof typeof names;

export type {RootStackParamList, StackName};
export {stackName};
