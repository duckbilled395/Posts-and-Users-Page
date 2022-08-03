import { InitialStateType, PostsPageActionTypes, PostsPageReducerActionTypes } from '../types/postsPageTypes'

const initialState: InitialStateType = {
	posts: [],
	comments: []
}

const postsPageReducer = (state = initialState, action: PostsPageReducerActionTypes): InitialStateType => {
	switch (action.type) {
		case PostsPageActionTypes.SET_POSTS:
			return { ...state, posts: action.payload }
		case PostsPageActionTypes.SET_COMMENTS:
			return { ...state, comments: action.payload }
		default:
			return state
	}
}

export default postsPageReducer
