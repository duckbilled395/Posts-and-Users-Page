import { AuthActionTypes, AuthReducerActionTypes, InitialStateType } from '../types/authTypes'

const initialState: InitialStateType = {
	authData: {
		email: '',
		password: '',
		confirmPassword: null,
		rememberMe: false,
		agreements: false
	}
}

export const authReducer = (state = initialState, action: AuthReducerActionTypes): InitialStateType => {
	switch (action.type) {
		case AuthActionTypes.SET_AUTHDATA:
			return { ...state, authData: action.payload }
		default:
			return state
	}
}

export default authReducer
