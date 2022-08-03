import React from 'react'
import styled from 'styled-components'

import { colors } from '../../constants'

import Login from '../LoginButtons'

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 26px;
`
const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 220px;
`

const Header: React.FC = () => {

	return (
		<StyledHeader>
			<StyledHeaderContent />
			<StyledHeaderContent>
				@Duckbilled395
			</StyledHeaderContent>
			<Login />
		</StyledHeader>

	)
}

export default Header
