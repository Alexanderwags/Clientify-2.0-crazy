import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@clientify/app/redux/reducers/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
