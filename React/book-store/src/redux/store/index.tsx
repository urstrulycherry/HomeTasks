/* eslint-disable */
import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage
}

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

export const persistor = persistStore(store)

// import { applyMiddleware, legacy_createStore } from 'redux';
// import rootReducer from '../reducer';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';


// const middleware = [thunk];

// const store = legacy_createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(...middleware)
// ));

// export default store;
