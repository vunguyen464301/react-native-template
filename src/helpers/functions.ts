import {getAccessTokenStorage} from 'services/localStorage';
import {ResponseErrors} from 'services/reducers/global/type';

const parseJSON = (data: string, initialError?: string | null) => {
  try {
    const dataParse = JSON.parse(data);
    return dataParse;
  } catch {
    return initialError;
  }
};

const handleMessageError = <T>(func: (messages: string[]) => T) => {
  return (err: unknown): T => {
    const errorData: ResponseErrors = err as ResponseErrors;
    if (errorData?.errors) {
      const messages: string[] = errorData.errors
        .map(error =>
          Object.keys(error).map(key => `${key.toUpperCase()}: ${error[key]}`),
        )
        .flat();
      // .join(', ');
      return func(messages);
    }
    return func(['ERROR: Fail !']);
  };
};

const bearerAccessToken = async () => `Bearer ${await getAccessTokenStorage()}`;

export {parseJSON, handleMessageError, bearerAccessToken};
