import React, {FC} from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import styled from 'styled-components';
import {connect} from "react-redux";

import {AuthDataType, setAuthDataActionType} from "../../../shared/store/types/authTypes";
import {AppStateType} from "../../../shared/store";
import {setAuthData} from "../../../shared/store/actions/auth-actions";
import {getAuthData} from "../../../shared/store/selectors/selectors";

import {TextField} from "../TextField/TextField";
import {CheckBox} from "../CheckBox/CheckBox";

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

interface MapStatePropsType {
    authData: AuthDataType
}

interface MapDispatchPropsType {
    setAuthData: (authData: AuthDataType) => setAuthDataActionType
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const LoginForm: FC<PropsType> = ({authData, setAuthData}) => {

    const validate = Yup.object({
        email: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required')
            .email('Must be a valid email'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password required')
    })

    const handleOnSubmit = (values: AuthDataType) => {
        setAuthData(values)
        console.log(values)
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
                        <TextField label='Email' name='email' type='text'/>
                        <TextField label='Password' name='password' type='password'/>
                        <CheckBox label='Remember Me' name='rememberMe' type='checkbox'/>
                        <StyledButton type='submit'>Login</StyledButton>
                    </Form>
                </StyledLoginForm>
            )}
        </Formik>
    )
};

let mapStateToProps = (state: AppStateType) => {
    return {
        authData: getAuthData(state)
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps, {setAuthData})(LoginForm);