interface PaginationProps {
  pageCurrent: number;
  pageSize: number;
  totalSize: number;
  totalPage: number;
}

type AlertColor = 'red' | 'blue';

interface ToastType {
  visible: boolean;
  messages: string | string[];
  type: AlertColor | undefined;
}
interface ModalType {
  visible: boolean;
  title?: string;
  description?: string;
}
interface GlobalState {
  openApp: boolean;
  loadingApp: boolean;
  toastApp: ToastType;
  modalApp: ModalType;
  localeApp: LocaleType;
}
interface Errors {
  errors: Record<string, string>[];
}
interface ResponseErrors {
  errors: Errors;
  statusCode: number;
}

type LocaleType = 'vi-VN' | 'en-US';

interface PaginationResponse<T> {
  list: T;
  paging: PaginationProps;
}
interface PaginationParams {
  pageCurrent?: number;
  pageSize?: number;
}

export type {
  GlobalState,
  ToastType,
  ModalType,
  LocaleType,
  PaginationResponse,
  PaginationParams,
  ResponseErrors,
  Errors,
};
