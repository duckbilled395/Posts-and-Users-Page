import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'

import { colors } from '../shared/constants'
import Header from '../shared/ui/Header/Header'
import SideBar from '../shared/ui/SideBar/SideBar'
import RouteComponents from '../pages'
import store from '../shared/store'

import './styles/app.css'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    color: ${colors.text};
    outline: none
  }
`
const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.border};
`
const AppWrapperContent = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background-color: ${colors.bg};
`

const App: React.FC = () => {

	return <Provider store={store}>
		<Global />
		<AppWrapper>
			<Header />
			<AppWrapperContent>
				<SideBar />
				<RouteComponents />
			</AppWrapperContent>
		</AppWrapper>
	</Provider>
}

export default App
