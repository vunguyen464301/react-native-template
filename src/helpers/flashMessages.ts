import {showMessage} from 'react-native-flash-message';
import colors from 'styles/colors';

const messageSuccess = (title: string, description?: string) => {
  showMessage({
    message: description ? title : 'Success',
    description: description ? description : title,
    // type: "success",
    backgroundColor: colors.success, // background color
    // color: colors.nhattin, // text color
    icon: 'success',
    duration: 3000,
  });
};

const messageInfo = (title: string, description?: string) => {
  showMessage({
    message: description ? title : 'Info',
    description: description ? description : title,
    // type: "info",
    backgroundColor: colors.info, // background color
    // color: colors.nhattin, // text color
    icon: 'info',
    duration: 3000,
  });
};

const messageError = (title: string, description?: string) => {
  showMessage({
    message: description ? title : 'Error',
    description: description ? description : title,
    // type: "danger",
    backgroundColor: colors.error, // background color
    // color: colors.nhattin, // text color
    icon: 'danger',
    duration: 5000,
  });
};

export {messageError, messageSuccess, messageInfo};
