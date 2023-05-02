import {StyleSheet} from 'react-native';
import colors from 'styles/colors';

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: 5,
    left: 10,
    backgroundColor: colors.accent_3_3,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  input: {
    borderRadius: 10,
    padding: 5,
    borderWidth: 0.5,
    borderColor: colors.NtExpress,
    height: 48,
  },
});

export default styles;
