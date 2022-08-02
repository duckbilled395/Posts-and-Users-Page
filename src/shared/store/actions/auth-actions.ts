import {AuthActionTypes, AuthDataType, setAuthDataActionType} from "../types/authTypes";

export const setAuthData = (authData: AuthDataType): setAuthDataActionType => ({
    type: AuthActionTypes.SET_AUTHDATA,
    payload: authData
});

