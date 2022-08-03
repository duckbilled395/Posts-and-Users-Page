import { Dispatch } from 'redux'

import { usersAPI } from '../../api'
import {
	SetUsersActionType,
	UsersPageActionTypes,
	UsersPageReducerActionTypes,
	UsersType
} from '../types/usersPageTypes'

export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({
	type: UsersPageActionTypes.SET_USERS,
	users
})

export const requestUsers = () => {
	return async (dispatch: Dispatch<UsersPageReducerActionTypes>) => {
		let users = await usersAPI.getUsers()
		dispatch(setUsers(users))
	}
}
