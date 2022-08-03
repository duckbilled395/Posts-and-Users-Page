import React from 'react'
import styled from 'styled-components'

import { colors } from '../../../shared/constants'

const StyledCommentForPost = styled.div`
  width: 400px;
  height: 100px;
  background-color: ${colors.bg};
  margin: 10px auto;
  border: ${colors.border} 4px solid;
  border-radius: 10px;
`
const StyledCommentContent = styled.div`
  font-size: 20px;
  padding: 15px;
`

type PropsType = {
	commentId: number,
	name: string
}

const CommentForPost: React.FC<PropsType> = ({ commentId, name }) => {

	return <StyledCommentForPost>
		<StyledCommentContent>{commentId} {name}</StyledCommentContent>
	</StyledCommentForPost>
}

export default CommentForPost
