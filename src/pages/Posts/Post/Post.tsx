import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { colors } from '../../../shared/constants'

const StyledPost = styled.div`
  height: 260px;
  background-color: ${colors.zxc};
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: ${colors.border} 4px solid;
  border-radius: 10px;
`
const StyledTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  padding: 10px;
  color: ${colors.border};
`
const StyledText = styled.p`
  display: inline-block;
  height: 100px;
  padding: 10px;
  color: ${colors.border};
`
const StyledButtonOfPosts = {
	width: '150px',
	height: '40px',
	textDecoration: 'none',
	fontSize: '20px',
	color: colors.text,
	backgroundColor: colors.bg,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '4px solid',
	borderColor: colors.border,
	borderRadius: '10px'
}

interface PropsType {
	title: string,
	text: string,
	postId: number
}

const Post: React.FC<PropsType> = ({ title, text, postId }) => {

	return (
		<StyledPost>
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{text}</StyledText>
			<NavLink style={StyledButtonOfPosts} to={`/posts/${postId}/comments`}>Comments</NavLink>
		</StyledPost>
	)
}

export default Post