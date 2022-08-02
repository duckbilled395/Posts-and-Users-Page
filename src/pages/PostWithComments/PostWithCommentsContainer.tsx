import React, { FC, useEffect } from 'react'
import { useMatch } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

import { CommentsType, PostsType } from '../../shared/store/types/postsPageTypes'
import { getComments, getPosts } from '../../shared/store/selectors/selectors'
import { requestComments, requestPosts } from '../../shared/store/actions/posts-page-actions'
import { AppStateType } from '../../shared/store'

import PostWithComments from './PostWithComments'

interface MapStatePropsType {
	posts: Array<PostsType>,
	comments: Array<CommentsType>
}

interface MapDispatchPropsType {
	requestPosts: () => void,
	requestComments: (currentPostId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const PostWithCommentsContainer: FC<PropsType> = ({ posts, comments, requestComments, requestPosts }) => {

	let currentPostId: number = +useMatch('/posts/:postId/comments')!.params!.postId!

	useEffect(() => {
		if (posts.length === 0) {
			requestPosts()
		}
	}, [])
	useEffect(() => {
		requestComments(currentPostId)
	}, [])

	return (
		<> {currentPostId
			? <PostWithComments
				posts={posts}
				currentPostId={currentPostId}
				comments={comments} />
			: <>Error, something went wrong...</>
		}</>
	)

}

let mapStateToProps = (state: AppStateType) => {
	return {
		posts: getPosts(state),
		comments: getComments(state)
	}
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
	mapStateToProps, { requestPosts, requestComments })(PostWithCommentsContainer)
