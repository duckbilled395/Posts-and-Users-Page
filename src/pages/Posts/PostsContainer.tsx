import React, {FC, useEffect, useState} from "react";
import {Navigate, useMatch} from "react-router-dom"
import {connect} from "react-redux";

import {AuthDataType} from "../../shared/store/types/authTypes";
import {PostsType} from "../../shared/store/types/postsPageTypes";
import {AppStateType} from "../../shared/store";
import {getAuthData, getPosts} from "../../shared/store/selectors/selectors";
import {requestPosts} from "../../shared/store/actions/posts-page-actions";

import Posts from "./Posts";
import Post from "./Post/Post";
import Paginator from "../../shared/ui/Paginator/Paginator";

interface MapStatePropsType {
    posts: Array<PostsType>
    auth: AuthDataType
}

interface MapDispatchPropsType {
    requestPosts: () => void
}

type PorpsType = MapStatePropsType & MapDispatchPropsType

const PostsContainer: FC<PorpsType> = React.memo(({posts, auth, requestPosts}) => {

    useEffect(() => {
        requestPosts()
    }, [])

    // Data for paginator and full understanding of paginator functional
    let [currentPage, setCurrentPage] = useState<number>(1);
    let pageSize: number = 10;

    const match = useMatch('/posts/user:userId');

    if (!auth.email) {  // Redirecting to a login form
        return <Navigate to='/login'/>
    }

    const selectionOfPostsOutput = (posts: Array<PostsType>, userId?: string | null | undefined) => {
        if (!userId) {
            return posts
                .filter((item, index) => index >= (currentPage * pageSize - pageSize) && index <= (currentPage * pageSize - 1))
                .map(element => <Post title={element.title} text={element.body} postId={element.id} key={element.id}/>);
        } else {
            let filteredPostsByUserId = posts.filter(post => post.userId === +userId)
            return filteredPostsByUserId.map(element => <Post title={element.title} text={element.body} postId={element.id} key={element.id}/>)
        }
    };

    if (match) {    // Choosing should it be default /posts/ or /posts/user:userId
        return (
            <Posts posts={posts} userId={match.params.userId} selectionOfPostsOutput={selectionOfPostsOutput}/>
        )
    } else {
        return (
            <div>
                <Paginator itemsAmount={posts.length} pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                <Posts posts={posts} selectionOfPostsOutput={selectionOfPostsOutput}/>
            </div>
        )
    }
})

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: getPosts(state),
        auth: getAuthData(state)
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps, {requestPosts})(PostsContainer);
