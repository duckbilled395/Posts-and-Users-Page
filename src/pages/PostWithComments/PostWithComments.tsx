import React, { FC } from 'react'
import styled from 'styled-components'

import { CommentsType, PostsType } from '../../shared/store/types/postsPageTypes'
import { colors } from '../../shared/constants'

import CommentForPost from './CommentForPost/CommentForPost'
import ErrorBoundary from '../../shared/ui/ErrorBoundary'


const StyledPost = styled.div`
  background-color: ${colors.zxc};
  font-size: 20px;
  line-height: 28px;
  border: ${colors.border} 4px solid;
  border-radius: 10px;
  margin: 0 30px 30px 30px;
`
const StyledPostTitle = styled.div`
  font-size: 28px;
  line-height: 24px;
  text-align: center;
  padding: 15px;
  color: ${colors.border};
`
const StyledPostText = styled.p`
  margin: 10px;
  color: ${colors.border};
  font-size: 26px;
`

type PropsType = {
	posts: PostsType[],
	currentPostId: number
	comments: CommentsType[],
}

const PostWithComments: FC<PropsType> = ({ posts, comments, currentPostId }) => {

	let commentsElements = comments.map((el) => <CommentForPost commentId={el.id} name={el.name} key={el.id} />)

	return <>
		{posts.length === 0
			? <ErrorBoundary />
			: <StyledPost>
				<StyledPostTitle>{posts[currentPostId].title}</StyledPostTitle>
				<StyledPostText>{posts[currentPostId].body}</StyledPostText>
				<div>{commentsElements}</div>
			</StyledPost>}
	</>
}

export default PostWithComments
