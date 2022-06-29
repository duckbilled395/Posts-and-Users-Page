import React, {FC} from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import styled from 'styled-components';

import {AuthDataType} from "../../../shared/store/types/authTypes";
import {checkBoxLabel} from "./lib";
import {setAuthData} from "../../../shared/store/actions/auth-actions";

import {TextField} from "../TextField/TextField";
import {CheckBox} from "../CheckBox/CheckBox";
import {useAppDispatch} from "../../../shared/hooks/hooks";

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

const SignUpForm: FC = () => {

    const dispatch = useAppDispatch();

    const validate = Yup.object({
        email: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required')
            .email('Must be a valid email'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        agreements: Yup.boolean().oneOf([true], 'Required')
    });

    const handleOnSubmit = (values: AuthDataType) => {
        dispatch(setAuthData(values))
        console.log(values)
    }

    return (
        <Formik initialValues={{
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
                        <TextField label='Email' name='email' type='text'/>
                        <TextField label='Password' name='password' type='password'/>
                        <TextField label='Confirm Password' name='confirmPassword' type='password'/>
                        <CheckBox label={checkBoxLabel} name='agreements' type='checkbox'/>
                        <StyledButtonSignUp type='submit'>Sign up</StyledButtonSignUp>
                    </Form>
                </StyledLoginForm>
            )}
        </Formik>
    )
}

export default SignUpForm;