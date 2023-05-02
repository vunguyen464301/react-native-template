import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import LoginScreen from './src/screens/Login';
import {store, useAppDispatch, useAppSelector} from 'services/store';
import {IntlProvider} from 'react-intl';
import {selectUser} from 'services/reducers/auth';
import useLocale from 'hooks/useLocale';
import {setOpenApp} from 'services/reducers/global';
import Navigator from 'navigator';

const Component = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectorUser = useAppSelector(selectUser);
  const {locale, messages} = useLocale();

  useEffect(() => {
    dispatch(setOpenApp(true));
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Navigator />
    </IntlProvider>
  );
};

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default App;
