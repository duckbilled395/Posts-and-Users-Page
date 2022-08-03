import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { colors } from '../../../shared/constants'

const StyledUserContainer = styled.div`
  width: 740px; // ---???
  height: 150px;
  background-color: ${colors.border};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: ${colors.zxc} 4px solid;
  border-radius: 10px;
  margin: 0 30px 30px 30px;
`
const StyledUserInfoContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`
const StyledUserId = styled.div`
  font-size: 28px;
  margin: 10px;
`
const StyledUserInfo = styled.div`
  font-size: 24px;
  margin: 10px;
`
const StyledButtonOfPosts = {
	width: '250px',
	height: '75px',
	textDecoration: 'none',
	fontSize: '24px',
	color: colors.text,
	backgroundColor: colors.bg,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '4px solid',
	borderColor: colors.zxc,
	borderRadius: '10px'
}

type PropsType = {
	id: number,
	name: string,
	username: string,
	email: string
}

const User: React.FC<PropsType> = ({ id, username, name, email }) => {

	return (
		<StyledUserContainer>
			<StyledUserId>{id}</StyledUserId>
			<StyledUserInfoContainer>
				<StyledUserInfo>{name}</StyledUserInfo>
				<StyledUserInfo>{username}</StyledUserInfo>
				<StyledUserInfo>{email}</StyledUserInfo>
			</StyledUserInfoContainer>
			<NavLink style={StyledButtonOfPosts} to={'/posts/user' + id}>View all posts...</NavLink>
		</StyledUserContainer>
	)
}

export default User
