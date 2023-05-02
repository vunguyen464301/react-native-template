// import { parseJSON } from '@/utils/functions';
import {REACT_APP_URL} from '@env';
import axios, {
  type AxiosHeaders,
  type Method,
  type RawAxiosRequestHeaders,
} from 'axios';
// import { getUserStorage } from '../localStorage';
// import { UserType } from '../reducers/auth/types';

interface RequestConfig {
  method?: Method;
  url?: string;
  path?: string;
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
  params?: Record<string, unknown>;
  data?: Record<string, any>;
}

interface AxiosConfig extends Omit<RequestConfig, 'path'> {}

const API_HOST = REACT_APP_URL;

const headers: RawAxiosRequestHeaders | AxiosHeaders = {
  'Content-Type': 'application/json',
  accept: '*/*',
};

const headersAuthorization = (): RawAxiosRequestHeaders | AxiosHeaders => {
  // const userJSON = getUserStorage();
  // let token = '';
  // if (userJSON) {
  //   const user = parseJSON(userJSON) as UserType | null;
  //   if (user) token = user.token;
  // }

  return {
    ...headers,
    // ...(token ? { Authorization: `Bearer ${token}` } : ''),
  };
};

const config = async (requestConfig: RequestConfig) => {
  const {url, path} = requestConfig;
  const apiURL = (url || API_HOST) + (path ? `${path}` : '');
  const axiosConfig: AxiosConfig = {
    headers,
    ...requestConfig,
    url: apiURL,
  };

  const executor = async function (
    resolve: (val: unknown) => void,
    reject: (val: unknown) => void,
  ) {
    try {
      const response = await axios(axiosConfig);

      resolve({data: response.data, status: response.status});
    } catch (error: any) {
      reject({
        error: error?.response?.data,
        status: error?.response?.request?.status,
      });
    }
  };
  return new Promise(executor);
};

export type {AxiosConfig, RequestConfig};
export {headersAuthorization};
export default config;
