import React, { FC, useEffect, useState } from 'react'
import {Navigate, useLocation, useMatch} from 'react-router-dom'

import { PostsType } from '../../shared/store/types/postsPageTypes'
import { getAuthData, getPosts } from '../../shared/store/selectors/selectors'

import Posts from './Posts'
import Paginator from '../../shared/ui/Paginator/Paginator'
import { useActions, useAppSelector } from '../../shared/hooks/hooks'

const PostsContainer: FC = React.memo(() => {

	const { requestPosts } = useActions()
	const posts = useAppSelector(state => getPosts(state))
	const auth = useAppSelector(state => getAuthData(state))

	let [currentPage, setCurrentPage] = useState<number>(1)	// Data for paginator and full understanding of paginator functional
	let pageSize: number = 10

	const match = useMatch('/posts/user:userId')

	useEffect(() => {
		requestPosts()
	}, [])

	const postsFilteredIncludingUserId = (posts: Array<PostsType>, userId?: string | null | undefined) => {
		return !userId
			? posts.filter((item, index) => index >= (currentPage * pageSize - pageSize) && index <= (currentPage * pageSize - 1))
			: posts.filter(post => post.userId === +userId)
	}

	if (!auth.email) {  // Redirecting to a login form
		return <Navigate to='/login' />
	}

// Choosing should it be default /posts/ or /posts/user:userId
	return (match ? <Posts posts={posts} userId={match!.params.userId}
						   postsFilteredIncludingUserId={postsFilteredIncludingUserId} />
			: <div><Paginator itemsAmount={posts.length} pageSize={pageSize} setCurrentPage={setCurrentPage}
							  currentPage={currentPage} />
				<Posts posts={posts} postsFilteredIncludingUserId={postsFilteredIncludingUserId} /></div>
	)
})

export default PostsContainer
