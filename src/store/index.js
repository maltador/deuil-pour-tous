import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


//dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

const persistConfig = {
  key: process.env.REACT_APP_API_REDUX,
  storage,
}

const PersistReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(
  PersistReducer, composeWithDevTools(applyMiddleware(thunk))
)

const Persistor = persistStore(store);


export { Persistor };
export default store;