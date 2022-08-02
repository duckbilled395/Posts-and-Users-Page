import React from 'react'
import { Form, Formik } from 'formik'
import styled from 'styled-components'

import { AuthDataType } from 'shared/store/types/authTypes'
import { checkBoxLabel } from './lib'
import { setAuthData } from 'shared/store/actions/auth-actions'
import validate from './validationSchema'
import { TextField } from '../TextField/TextField'
import { CheckBox } from '../CheckBox/CheckBox'
import { useAppDispatch } from 'shared/hooks/hooks'

const StyledLoginForm = styled.div`
  width: 400px;
  margin: 50px auto 0 auto;
`
const styledForm = {
	width: '400px'
}
const StyledButtonSignUp = styled.button`
  width: 400px;
  height: 52px;
  text-decoration: none;
  outline: none;
  margin: 30px 0 0 0;
`

const SignUpForm: React.FC = () => {

	const dispatch = useAppDispatch()

	const handleOnSubmit = (values: AuthDataType) => {
		dispatch(setAuthData(values))
		console.log(values)
	}

	return <Formik initialValues={{
		email: '',
		password: '',
		confirmPassword: '',
		agreements: false
	}}
				   validationSchema={validate}
				   onSubmit={(values) => handleOnSubmit(values)}
	>
		{() => (
			<StyledLoginForm>
				<Form style={styledForm}>
					<TextField label='Email' name='email' type='text' />
					<TextField label='Password' name='password' type='password' />
					<TextField label='Confirm Password' name='confirmPassword' type='password' />
					<CheckBox label={checkBoxLabel} name='agreements' type='checkbox' />
					<StyledButtonSignUp type='submit'>Sign up</StyledButtonSignUp>
				</Form>
			</StyledLoginForm>
		)}
	</Formik>
}

export default SignUpForm
