import { AppStateType } from '../index'
import { CommentsType, PostsType } from '../types/postsPageTypes'
import { AuthDataType } from '../types/authTypes'
import { UsersType } from '../types/usersPageTypes'

export const getPosts = (state: AppStateType): Array<PostsType> => {
	return state.postsPage.posts
}

export const getAuthData = (state: AppStateType): AuthDataType => {
	return state.auth.authData
}

export const getComments = (state: AppStateType): Array<CommentsType> => {
	return state.postsPage.comments
}

export const getUsers = (state: AppStateType): Array<UsersType> => {
	return state.usersPage.users
}
