import React, { FC } from 'react'
import styled from 'styled-components'

import { PostsType } from '../../shared/store/types/postsPageTypes'
import { colors } from '../../shared/constants'
import Post from './Post/Post'

const StyledPostsContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.bg};
  padding: 0 30px 30px 30px;
`

interface PropsType {
	posts: Array<PostsType>,
	userId?: string | null | undefined,
	postsFilteredIncludingUserId: (posts: Array<PostsType>, userId?: string | null | undefined) => Array<PostsType>
}

const Posts: FC<PropsType> = React.memo(({ posts, postsFilteredIncludingUserId, userId }) => {

	const postsElements = postsFilteredIncludingUserId(posts, userId)
		.map(element => <Post title={element.title} text={element.body} postId={element.id} key={element.id} />)

	return <StyledPostsContent>{postsElements}</StyledPostsContent>
})

export default Posts