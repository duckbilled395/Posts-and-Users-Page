export enum UsersPageActionTypes {      // Types of action.type
	SET_USERS = 'SET_USERS'
}

export interface UsersType {        // Type of Array of users
	id: number,
	name: string,
	username: string,
	email: string,
	address: AddressType,
	phone: string,
	website: string,
	company: CompanyType
}

interface AddressType {     // Type of adress of user
	street: string,
	suite: string,
	city: string,
	zipcode: string,
	geo: {
		lat: string,
		lng: string
	}
}

interface CompanyType {     // Type of company of user
	name: string,
	catchPhrase: string,
	bs: string
}

export interface SetUsersActionType {       // Type of ActionCreator
	type: UsersPageActionTypes.SET_USERS,
	users: Array<UsersType>
}

export interface InitialStateType {     // Type of initialState of usersReducer
	users: Array<UsersType>
}

export type UsersPageReducerActionTypes = SetUsersActionType;       // Combine types of ActionCreator of usersReducer
