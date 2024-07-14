import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice';
import courseReducer from './courses/courseSlice';
// import dashReducer from './dashboard/dashSlice';
// import incuReducer  from './incubatees/incuSlice';
// import userReducer from './users/userSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}



const appReducer = combineReducers({
    auth: authReducer,
    courses: courseReducer,
    // dash: dashReducer,
    // incubatees: incuReducer,
    // user: userReducer
})


const rootReducer = (state: any, action: any) => {
    if (action.type === "auth/logout") {
        state = undefined;
    }
    return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    })
    
// CREATE THE PERSISTOR OBJECT

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

