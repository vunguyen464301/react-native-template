import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from 'navigator/routes';
import {
  useNavigation,
  useRoute,
  type NavigationProp,
  type RouteProp,
} from '@react-navigation/native';

const RegisterScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'REGISTER'>>();
  console.log(route.name);

  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
