import {StyleSheet} from 'react-native';
import colors from 'styles/colors';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.bgBook,
  },
  loginForm: {
    backgroundColor: colors.accent_3_3,
    borderRadius: 6,
    padding: 10,
    minWidth: 200,
  },
  input: {
    borderRadius: 10,
    padding: 5,
    borderWidth: 0.5,
    borderColor: colors.NtExpress,
  },
  loginButton: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.accent_4_2,
    width: '40%',
  },
  registerButton: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.accent_5_1,
    width: '40%',
  },
});

export default styles;
