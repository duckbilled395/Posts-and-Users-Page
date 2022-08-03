import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { colors } from '../../constants'

const StyledLoginMenu = styled.div`
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`
const styledLogin = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textDecoration: 'none',
	width: '100px',
	height: '40px',
	backgroundColor: colors.white,
	border: '3px solid ',
	borderColor: colors.border,
	borderRadius: '8px',
	fontSize: '20px',
	lineHeight: '20px',
	color: colors.text
}

const LoginButtons: React.FC = () => {

	return (
		<StyledLoginMenu>
			<NavLink style={styledLogin} to='/login'>Login</NavLink>
			<NavLink style={styledLogin} to='/signUp'>Sign up</NavLink>
		</StyledLoginMenu>
	)
}

export default LoginButtons
