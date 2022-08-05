import React from 'react'
import { ErrorMessage, Field, useField } from 'formik'
import styled from 'styled-components'

const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`
const styledField = {
	width: '400px',
	height: '52px',
	borderRadius: '8px',
	fontSize: '18px'

}
const StyledLabel = styled.label`
  height: 22px;
`
const StyledErrorMessage = styled.div`
  color: red
`

interface PropsType {
	label: string
	name: string
	type: string
}

export const TextField: React.FC<PropsType> = ({ label, ...props }) => {
	const [field, meta] = useField({ ...props })

	return (
		<StyledTextField>
			<StyledLabel htmlFor={field.name}>{label}</StyledLabel>
			<Field style={styledField} {...field} {...props} autoComplete='off' />
			<StyledErrorMessage>
				<ErrorMessage name={field.name} />
			</StyledErrorMessage>
		</StyledTextField>
	)
}
