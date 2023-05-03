import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {stackName, type RootStackParamList} from './routes';
import LoginScreen from 'screens/Login';
import options from './options';
import RegisterScreen from 'screens/Register';
import HomeScreen from 'screens/Home';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen
          name={stackName.login}
          component={LoginScreen}
          options={options.loginOption}
        />
        <Stack.Screen
          name={stackName.register}
          component={RegisterScreen}
          options={options.registerOption}
        />
        <Stack.Screen
          name={stackName.home}
          component={HomeScreen}
          options={options.homeOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
