import {combineReducers} from '@reduxjs/toolkit';
import authReducer from 'services/reducers/auth';
import globalReducer from 'services/reducers/global';

const rootReducer = combineReducers({
  ...authReducer,
  ...globalReducer,
});

export default rootReducer;
