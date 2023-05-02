import useLocale from 'hooks/useLocale';
import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LocaleType} from 'services/reducers/global/type';
import {RootStackParamList} from 'navigator/routes';
import {useNavigation, type NavigationProp} from '@react-navigation/native';
import styles from './styles';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import s from 'styles';
import InputCustom1 from 'components/inputs/InputCustom1';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {useAppDispatch, useAppSelector} from 'services/store';
import {loginRequest, selectLogin} from 'services/reducers/auth';
import api from 'services/api';

interface LoginForm {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {messages, setLocale} = useLocale();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const selectorLogin = useAppSelector(selectLogin);

  const onUpdateLanguage = (locale: LocaleType) => {
    setLocale(locale);
  };
  const {
    getFieldProps,
    errors,
    handleSubmit,
    isValid,
    submitForm,
    handleChange,
    handleBlur,
    setFieldTouched,
    values,
  } = useFormik<LoginForm>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('values', values);
      dispatch(loginRequest({...values}));
    },
  });

  return (
    <SafeAreaView style={styles.bg} edges={['bottom', 'left', 'right']}>
      <ScrollView>
        {/* <View
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
      </TouchableOpacity> */}

        <View style={[s.rowCenter, s.alignItemCenter, s.mt40]}>
          <View style={styles.loginForm}>
            <InputCustom1
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
            />
            <InputCustom1
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              error={errors.password}
            />

            <View style={[s.rowBetween, s.mt20]}>
              <TouchableOpacity style={[styles.registerButton]}>
                <Text style={[s.textWhite_1, s.textCenter]}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit}
                style={[styles.loginButton]}>
                <Text style={[s.textWhite_1, s.textCenter]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
