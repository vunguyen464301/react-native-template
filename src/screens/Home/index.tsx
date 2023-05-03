import React from 'react';
import {Button, Text, View, NativeModules, Platform} from 'react-native';

const {CalendarModule} = NativeModules;

const HomeScreen = (): JSX.Element => {
  const onTest = () => {
    CalendarModule.createCalendarEvent('test', '1234324324');
  };
  return (
    <View>
      <Text>ok</Text>
      {Platform.OS === 'android' && (
        <Button onPress={onTest} title="ok"></Button>
      )}
    </View>
  );
};

export default HomeScreen;
