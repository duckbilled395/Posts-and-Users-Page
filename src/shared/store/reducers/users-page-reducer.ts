import { InitialStateType, UsersPageActionTypes, UsersPageReducerActionTypes } from '../types/usersPageTypes'

const initialState: InitialStateType = {
	users: []
}

const usersPageReducer = (state = initialState, action: UsersPageReducerActionTypes): InitialStateType => {
	switch (action.type) {
		case UsersPageActionTypes.SET_USERS:
			return { ...state, users: action.users }
		default:
			return state
	}
}

export default usersPageReducer
