import { Dispatch } from 'redux'
import { postsAPI } from '../../api'
import {
	CommentsType,
	PostsPageActionTypes,
	PostsPageReducerActionTypes,
	PostsType,
	SetCommentsForPostType,
	SetPostsType
} from '../types/postsPageTypes'

export const setPosts = (posts: Array<PostsType>): SetPostsType => ({
	type: PostsPageActionTypes.SET_POSTS,
	payload: posts
})

export const setCommentsForPost = (comments: Array<CommentsType>): SetCommentsForPostType => ({
	type: PostsPageActionTypes.SET_COMMENTS,
	payload: comments
})

export const requestPosts = () => {
	return async (dispatch: Dispatch<PostsPageReducerActionTypes>) => {
		let posts = await postsAPI.getPosts()
		dispatch(setPosts(posts))
	}
}

export const requestComments = (postId: number) => {
	return async (dispatch: Dispatch<PostsPageReducerActionTypes>) => {
		let comments = await postsAPI.getComments(postId)
		dispatch(setCommentsForPost(comments))
	}
}
