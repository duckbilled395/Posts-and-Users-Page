import { AuthActionTypes, AuthDataType, AuthReducerActionTypes, setAuthDataActionType } from '../types/authTypes'
import { Dispatch } from 'redux'
import { authAPI } from '../../api'

export const setAuthData = (authData: AuthDataType): setAuthDataActionType => ({
	type: AuthActionTypes.SET_AUTHDATA,
	payload: authData
})

export const sendAuthData = (authData: AuthDataType) => {
	return async (dispatch: Dispatch<AuthReducerActionTypes>) => {
		let response: {status?: string | undefined, id?: string | undefined, body?: string | undefined} = await authAPI.sendAuthData(authData)
		console.log(response.body)
	} // БОЛЬШОЙ ВОПРОС К ТИПАМ ДИМА
}

// export const requestPosts = () => {
// 	return async (dispatch: Dispatch<PostsPageReducerActionTypes>) => {
// 		let posts = await postsAPI.getPosts()
// 		dispatch(setPosts(posts))
// 	}
// }