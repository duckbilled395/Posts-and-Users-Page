export enum AuthActionTypes {       // Types of action.type
	SET_AUTHDATA = 'SET_AUTHDATA'
}

export interface AuthDataType {     // Type of AuthData object
	email: string | null,
	password: string | null,
	confirmPassword?: string | undefined | null,
	rememberMe?: boolean,
	agreements?: boolean,
}

export interface ReplyToSendAuthData {status?: string | undefined, id?: string | undefined, body?: string | undefined}

export interface InitialStateType {     // Type of initial state of AuthReducer
	authData: {
		email: string | null,
		password: string | null,
		confirmPassword?: string | undefined | null,
		rememberMe?: boolean,
		agreements?: boolean
	}
}

export type setAuthDataActionType = {       // Type of ActionCreator
	type: AuthActionTypes.SET_AUTHDATA,
	payload: AuthDataType
}

export type AuthReducerActionTypes = setAuthDataActionType;     // Combine types of ActionCreator of AuthReducer
