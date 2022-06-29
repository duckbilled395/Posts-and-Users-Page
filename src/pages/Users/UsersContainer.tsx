import React, {FC, useEffect} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

import {AuthDataType} from "../../shared/store/types/authTypes";
import {UsersType} from "../../shared/store/types/usersPageTypes";
import {AppStateType} from "../../shared/store";
import {requestUsers} from "../../shared/store/actions/users-page-actions";
import {getAuthData, getUsers} from "../../shared/store/selectors/selectors";

import Users from "./Users";

interface MapStatePropsType {
    users: Array<UsersType>
    auth: AuthDataType
}

interface MapDispatchPropsType {
    requestUsers: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: FC<PropsType> = ({users, auth, requestUsers}) => {

    useEffect(() => {
        requestUsers()
    }, [])

    if (!auth.email) {  // Redirecting to a login form
        return <Navigate to='/login'/>
    }

    return (
        <Users users={users}/>
    )
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        auth: getAuthData(state)
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps, {requestUsers})(UsersContainer);