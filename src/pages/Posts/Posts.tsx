import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

import { PostsType } from '../../shared/store/types/postsPageTypes'
import { colors } from '../../shared/constants'

const StyledPostsContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.bg};
  padding: 0 30px 30px 30px;
`

interface PropsType {
	posts: Array<PostsType>,
	userId?: string | null | undefined,
	selectionOfPostsOutput: (posts: Array<PostsType>, userId?: string | null | undefined) => Array<ReactElement>
}

const Posts: FC<PropsType> = React.memo((props) => {

	let posts: ReactElement[] = props.selectionOfPostsOutput(props.posts, props.userId)

	return (
		<StyledPostsContent>
			{posts}
		</StyledPostsContent>
	)
})

export default Posts