import React, { FC } from 'react'
import { ErrorMessage, useField, Field } from 'formik'
import styled from 'styled-components'

const StyledTextField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 0;
`
const styledField = {
	width: '18px',
	height: '18px',
	borderRadius: '2px',
	border: '1px solid #000000',
}
const StyledOuterField = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledLabel = styled.label`
  display: block;
  width: 400px;
  margin: 0 0 0 5px;
`
const StyledErrorMessage = styled.div`
  color: red
`

type PropsType = {
	label: string,
	name: string,
	type: string
}

export const CheckBox: FC<PropsType> = ({ label, name, type }) => {
	const [field, meta] = useField({ name, type })

	return <>
		<StyledTextField>
			<StyledOuterField>
				<Field style={styledField} {...field} name={name} type={type} autoComplete='off' />
			</StyledOuterField>
			<StyledLabel htmlFor={field.name}>{label}</StyledLabel>
		</StyledTextField>
		<StyledErrorMessage>
			<ErrorMessage name={field.name} />
		</StyledErrorMessage>
	</>
}
