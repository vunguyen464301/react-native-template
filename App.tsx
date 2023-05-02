import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store, useAppDispatch, useAppSelector} from 'services/store';
import {IntlProvider} from 'react-intl';
import {selectUser} from 'services/reducers/auth';
import useLocale from 'hooks/useLocale';
import {selectLoadingApp, setOpenApp} from 'services/reducers/global';
import Navigator from 'navigator';
import LoadingApp from 'components/modals/LoadingApp';
import FlashMessage from 'react-native-flash-message';

const Component = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectorUser = useAppSelector(selectUser);
  const selectorLoadingApp = useAppSelector(selectLoadingApp);
  const {locale, messages} = useLocale();

  useEffect(() => {
    dispatch(setOpenApp(true));
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <LoadingApp isVisible={selectorLoadingApp} />
      <FlashMessage position="top" />
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
