import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import AllReducers from './reducers'

export const store = createStore(AllReducers, applyMiddleware(thunk, logger))
export const persistor = persistStore(store)
