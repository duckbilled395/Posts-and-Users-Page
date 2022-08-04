import React from 'react'
import { Form, Formik } from 'formik'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { useActions, useAppDispatch } from 'shared/hooks/hooks'
import { AuthDataType } from '../../../shared/store/types/authTypes'
import { CheckBox } from '../CheckBox/CheckBox'
import { TextField } from '../TextField/TextField'
import { sendAuthData, setAuthData } from '../../../shared/store/actions/auth-actions'

import validate from './validationSchema'

const StyledLoginForm = styled.div`
  width: 400px;
  margin: 50px auto 0 auto;
`
const styledForm = {
	width: '400px'
}
const StyledButton = styled.button`
  width: 400px;
  height: 52px;
  text-decoration: none;
  outline: none;
  margin: 10px 0 0 0;
`

const LoginForm: React.FC = () => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { sendAuthData } = useActions()

	const handleOnSubmit = (values: AuthDataType) => {
		dispatch(setAuthData(values))
		console.log(values)
		navigate('/posts')
		sendAuthData(values)
	}

	return (
		<Formik initialValues={{
			email: '',
			password: '',
			rememberMe: false
		}} validationSchema={validate}
				onSubmit={(values) => handleOnSubmit(values)}
				validateOnChange={false}
		>
			{() => (
				<StyledLoginForm>
					<Form style={styledForm}>
						<TextField label='Email' name='email' type='text' />
						<TextField label='Password' name='password' type='password' />
						<CheckBox label='Remember Me' name='rememberMe' type='checkbox' />
						<StyledButton type='submit'>Login</StyledButton>
					</Form>
				</StyledLoginForm>
			)}
		</Formik>
	)
}

export default LoginForm
