import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import postPageReducer from './reducers/posts-page-reducer'
import usersPageReducer from './reducers/users-page-reducer'
import authReducer from './reducers/auth-reducer'

const reducers = combineReducers({
	postsPage: postPageReducer,
	usersPage: usersPageReducer,
	auth: authReducer
})

export type AppStateType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
	AppStateType,
	unknown,
	Action<string>>;
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store

// @ts-ignore
window.store = store
