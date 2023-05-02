import {PayloadAction} from '@reduxjs/toolkit';

interface ResponseSuccessAction<T = unknown>
  extends PayloadAction<{data: T; status: number}> {}
interface ResponseFailureAction<T = unknown>
  extends PayloadAction<{error: T; status: number}> {}

interface ResponseError {
  error: string;
  message: string;
  statusCode: number;
}
interface ResponseStateType<D, E> {
  data: D | null;
  error: E | null;
  loading: boolean | null;
  statusMessage: 'success' | 'error' | 'warning' | null;
  status: number | null;
}

const initResponseState = <D, E>(): ResponseStateType<D, E> => {
  return {
    data: null,
    error: null,
    loading: null,
    status: null,
    statusMessage: null,
  };
};

const responseSuccess = <T = unknown, D = unknown>(
  prevData: T,
  action: PayloadAction<{data: D; status: number}>,
): T => {
  return {
    ...prevData,
    data: action.payload.data,
    status: action.payload.status,
    statusMessage: 'success',
    loading: false,
  };
};

const responseReject = <T = unknown, D = unknown>(
  prevData: T,
  action: PayloadAction<{error: D; status: number}>,
): T => {
  return {
    ...prevData,
    error: action.payload.error,
    status: action.payload.status,
    statusMessage: 'error',
    loading: false,
  };
};

const responsePending = <T = unknown>(prevData: T): T => {
  return {
    ...prevData,
    error: null,
    data: null,
    status: null,
    statusMessage: null,
    loading: true,
  };
};

export type {
  ResponseSuccessAction,
  ResponseFailureAction,
  ResponseStateType,
  ResponseError,
};
export {responseSuccess, responseReject, responsePending, initResponseState};
