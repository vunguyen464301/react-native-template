import AsyncStorage from '@react-native-community/async-storage';
import {LocaleType} from 'services/reducers/global/type';

const ACCESS_TOKEN = 'ACCESS_TOKEN';
const LOCALE = 'LOCALE';

const setAccessTokenStorage = async (accessToken: string): Promise<void> => {
  return AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
};

const removeAccessTokenStorage = async (): Promise<any> => {
  return AsyncStorage.removeItem(ACCESS_TOKEN);
};

const getAccessTokenStorage = async (): Promise<string | null> => {
  return AsyncStorage.getItem(ACCESS_TOKEN);
};

const setLocaleStorage = async (locale: LocaleType): Promise<void> => {
  return AsyncStorage.setItem(LOCALE, locale);
};

const removeLocaleStorage = async (): Promise<any> => {
  return AsyncStorage.removeItem(LOCALE);
};

const getLocaleStorage = async (): Promise<LocaleType | null> => {
  const result = (await AsyncStorage.getItem(LOCALE)) as LocaleType | null;
  return result;
};

export {
  setAccessTokenStorage,
  removeAccessTokenStorage,
  getAccessTokenStorage,
  setLocaleStorage,
  removeLocaleStorage,
  getLocaleStorage,
};
