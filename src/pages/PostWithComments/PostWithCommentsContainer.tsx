import React, { FC, useEffect } from 'react'
import { useMatch } from 'react-router-dom'

import { getComments, getPosts } from '../../shared/store/selectors/selectors'
import PostWithComments from './PostWithComments'
import { useActions, useAppSelector } from '../../shared/hooks/hooks'

const PostWithCommentsContainer: FC = () => {

	const posts = useAppSelector(state => getPosts(state))
	const comments = useAppSelector(state => getComments(state))
	const { requestPosts, requestComments } = useActions()

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
		<>
			{currentPostId
				? <PostWithComments
					posts={posts}
					currentPostId={currentPostId}
					comments={comments}
				/>
				: <>Error, something went wrong...</>
			}
		</>
	)
}

export default PostWithCommentsContainer
