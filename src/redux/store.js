// @flow
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';

import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { CCRed } from './action_reducers';
import { OrdersRed } from './orders';
import { SettingRed } from './setting';
import { OrdersStoryRed } from './ordersStory';
import { TotalRed } from './total';

import type {Node} from "react";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  ccReducer: CCRed,
  ordersReducer: OrdersRed,
  SettingReducer: SettingRed,
  ordersStoryReducer: OrdersStoryRed,
  totalReducer: TotalRed,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store:Node = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST],
    },
  }),
});

// export const persistor = persistStore(store);
