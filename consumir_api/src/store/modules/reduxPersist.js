import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persisteReducers = persistReducer(
    {
      key: 'CONSUMO_API',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persisteReducers;
};
