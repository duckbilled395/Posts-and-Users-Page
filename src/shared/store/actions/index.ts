import * as AuthActionCreators from './auth-actions'
import * as PostsPageActionCreators from './posts-page-actions'
import * as UsersPageActionCreators from './users-page-actions'

export const ActionCreators = {
	...AuthActionCreators,
	...PostsPageActionCreators,
	...UsersPageActionCreators
}
