import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {ActivityIndicator, Text, View} from 'react-native';
import colors from 'styles/colors';
import styles from './styles';
import s from 'styles';
import type {LoadingAppProps} from './types';

const LoadingApp = (props: LoadingAppProps): JSX.Element => {
  const {isVisible, label} = props;

  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}>
      <View style={[s.rowCenter, s.alignItemCenter]}>
        <View style={[styles.loadingView]}>
          <View>
            <ActivityIndicator size={'large'} color={colors.NtExpress} />
            {label && (
              <View style={s.mt10}>
                <Text style={[s.textCenter, s.textCustom_2_1]}>{label}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default LoadingApp;
