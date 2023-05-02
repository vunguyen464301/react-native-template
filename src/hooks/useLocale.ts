import {setLocaleStorage} from 'services/localStorage';
import {selectLocaleApp, setLocaleApp} from 'services/reducers/global';
import {LocaleType} from 'services/reducers/global/type';
import {useAppDispatch, useAppSelector} from 'services/store';
import {useMemo, useEffect, useState} from 'react';

const messagesLoader = {
  'en-US': () => import('../assets/i18n/en-US.json'),
  'vi-VN': () => import('../assets/i18n/vi-VN.json'),
};

interface LocaleAppType {
  locale: LocaleType;
  default: LocaleType;
  setLocale: (val: LocaleType) => void;
  messages: Record<string, any>;
}

const useLocale = (): LocaleAppType => {
  const dispatch = useAppDispatch();

  const [messages, setMessages] = useState<
    Record<string, string | Record<string, string>>
  >({});
  const selectorLocaleApp = useAppSelector(selectLocaleApp);

  useEffect(() => {
    const loadMessages = async () => {
      const _messages = await messagesLoader[selectorLocaleApp]();
      setMessages(_messages);
    };
    loadMessages();
  }, [selectorLocaleApp]);

  const onChangeLocale = (val: LocaleType) => {
    dispatch(setLocaleApp(val));
    setLocaleStorage(val);
  };

  return useMemo(
    () => ({
      locale: selectorLocaleApp,
      default: 'en-US',
      setLocale: onChangeLocale,
      messages,
    }),
    [selectorLocaleApp, messages],
  );
};

export default useLocale;
