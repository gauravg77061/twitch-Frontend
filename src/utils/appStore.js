import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import channelsReducer from './channelsSlice';

const appStore=configureStore({
    reducer:{
        user:userReducer,
        channels:channelsReducer,
    }
})

export default appStore;
