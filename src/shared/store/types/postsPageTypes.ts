export enum PostsPageActionTypes {  // Types of action.type
	SET_POSTS = 'GET_POSTS',
	SET_COMMENTS = 'GET_COMMENTS'
}

export interface PostsType {    // Types of Array of posts
	userId: number,
	id: number,
	title: string,
	body: string
}

export interface CommentsType {     // Types of Array of comments
	postId: number,
	id: number,
	name: string,
	email: string,
	body: string
}

export interface InitialStateType {     // Types of postsPage initial state
	posts: Array<PostsType>
	comments: Array<CommentsType>
}

export interface SetPostsType {     // Type of ActionCreator
	type: PostsPageActionTypes.SET_POSTS,
	payload: Array<PostsType>
}

export interface SetCommentsForPostType {     // Type of ActionCreator
	type: PostsPageActionTypes.SET_COMMENTS,
	payload: Array<CommentsType>
}

export type PostsPageReducerActionTypes = SetPostsType | SetCommentsForPostType;    // Combine types of ActionCreators
