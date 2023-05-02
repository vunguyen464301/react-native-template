import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import s from 'styles';
import styles from './styles';

interface InputCustom1Props extends TextInputProps {
  error?: string | undefined;
  label?: string;
}
const InputCustom1 = (props: InputCustom1Props): JSX.Element => {
  const {label, error, ...inputProps} = props;
  const style = [inputProps.style || styles.input, label ? s.mt15 : s.mt0];

  return (
    <View style={s.row}>
      <View style={s.fl1}>
        <TextInput {...inputProps} style={style} />
        {label && <Text style={styles.label}>{label}</Text>}
        <Text style={s.textError}>{error}</Text>
      </View>
    </View>
  );
};

export default InputCustom1;
