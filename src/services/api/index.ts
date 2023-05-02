import config, { type RequestConfig, headersAuthorization } from './config';

const get = async (requestConfig?: RequestConfig) => {
  return config({ method: 'GET', ...requestConfig });
};
const post = async (requestConfig?: RequestConfig) => {
  return config({ method: 'POST', ...requestConfig });
};
const put = async (requestConfig?: RequestConfig) => {
  return config({ method: 'PUT', ...requestConfig });
};
const authGet = async (requestConfig?: RequestConfig) => {
  return config({ method: 'GET', ...requestConfig, headers: headersAuthorization() });
};
const authPost = async (requestConfig?: RequestConfig) => {
  return config({ method: 'POST', ...requestConfig, headers: headersAuthorization() });
};
const authPut = async (requestConfig?: RequestConfig) => {
  return config({ method: 'PUT', ...requestConfig, headers: headersAuthorization() });
};
const authDelete = async (requestConfig?: RequestConfig) => {
  return config({ method: 'DELETE', ...requestConfig, headers: headersAuthorization() });
};

export default { get, post, put, authGet, authPost, authPut, authDelete };
