import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { getAuthData, getUsers } from '../../shared/store/selectors/selectors'
import Users from './Users'
import { useActions, useAppSelector } from '../../shared/hooks/hooks'

const UsersContainer: React.FC = () => {

	const users = useAppSelector(state => getUsers(state))
	const auth = useAppSelector(state => getAuthData(state))
	const { requestUsers } = useActions()

	useEffect(() => {
		requestUsers()
	}, [])

	if (!auth.email) {  // Redirecting to a login form
		return <Navigate to='/login' />
	}

	return <Users users={users} />
}

export default UsersContainer
