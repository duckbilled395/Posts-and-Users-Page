import { Dispatch } from 'redux'

import { AuthActionTypes, AuthDataType, AuthReducerActionTypes, setAuthDataActionType } from '../types/authTypes'
import { authAPI } from '../../api'

export const setAuthData = (authData: AuthDataType): setAuthDataActionType => ({
	type: AuthActionTypes.SET_AUTHDATA,
	payload: authData
})

export const sendAuthData = (authData: AuthDataType) => {
	return async (dispatch: Dispatch<AuthReducerActionTypes>) => {
		let response = await authAPI.sendAuthData(authData)
		console.log(response)
		// setAuthorized and then redirect if it's true
	}
}
