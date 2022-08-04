import React from 'react'

import { UsersType } from '../../shared/store/types/usersPageTypes'
import User from './User/User'

type PropsType = {
	users: Array<UsersType>
}

const Users: React.FC<PropsType> = ({ users }) => {

	let usersElements = users.map(element => <User id={element.id} name={element.name}
												   username={element.username}
												   email={element.email} key={element.id}
	/>)

	return <>{usersElements}</>
}

export default Users
