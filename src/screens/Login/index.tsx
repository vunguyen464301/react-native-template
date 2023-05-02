import useLocale from 'hooks/useLocale';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LocaleType} from 'services/reducers/global/type';
import {RootStackParamList} from 'navigator/routes';
import {useNavigation, type NavigationProp} from '@react-navigation/native';

const LoginScreen = (): JSX.Element => {
  const {messages, setLocale} = useLocale();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onUpdateLanguage = (locale: LocaleType) => {
    setLocale(locale);
  };

  return (
    <View style={{marginTop: 300}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 50,
        }}>
        <TouchableOpacity
          style={{padding: 20, backgroundColor: 'blue'}}
          onPress={() => onUpdateLanguage('en-US')}>
          <Text style={{color: 'white', fontSize: 30}}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 20, backgroundColor: 'red'}}
          onPress={() => onUpdateLanguage('vi-VN')}>
          <Text style={{color: 'white', fontSize: 30}}>VN</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Text>{messages['hello']}</Text>
      </View>
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'yellow', alignItems: 'center'}}
        onPress={() => navigation.navigate('REGISTER', {user: 'ABC'})}>
        <Text style={{color: 'black', fontSize: 30}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
