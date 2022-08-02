import * as AuthActionCreators from './auth-actions'
import * as PostsPageActionCreators from './posts-page-actions'

export const ActionCreators = {
    ...AuthActionCreators,
    ...PostsPageActionCreators
}