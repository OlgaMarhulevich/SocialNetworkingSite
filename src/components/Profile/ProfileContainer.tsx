import React from 'react';
import {connect} from 'react-redux';
import {axiosInstance, PostType, ProfileType, statuses} from "../../entities/entities";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {addLike, addPost, removePost, setProfile, updateNewPostMessage, setFetching, setStatus} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router";

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        debugger
        let userID = this.props.match.params.userID
        if (!userID) userID = '2'
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.IN_PROGRESS)
            this.props.setFetching(false)
            axiosInstance.get(`profile/${userID}`)
                .then(response => {
                    this.props.setProfile(response.data)
                    this.props.setStatus(statuses.SUCCESS)
                    this.props.setFetching(true)
                })
        }
    }

    componentWillUnmount() {
        this.props.setStatus(statuses.NOT_INITIALIZED)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Profile
                    {...this.props}
                    /*profile={this.props.profile}
                    posts={this.props.posts}
                    newPostMessage={this.props.newPostMessage}
                    addPost={this.props.addPost}
                    updateNewPostMessage={this.props.updateNewPostMessage}
                    removePost={this.props.removePost}
                    addLike={this.props.addLike}*/
                />
                :
                <Preloader/>
            }
        </>
    }

}

type MapStatePropsType = {
    profile: ProfileType
    posts: Array<PostType>
    newPostMessage: string
    status: string
    isFetching: boolean
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostMessage: (postMessage: string) => void
    removePost: (id: number) => void
    addLike: (id: number) => void
    setProfile: (profile: ProfileType) => void
    setFetching: (fetching: boolean) => void
    setStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PathParamsType = { userID: string }
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
        posts: state.profile.posts,
        newPostMessage: state.profile.newPostMessage,
        isFetching: state.profile.isFetching,
        status: state.profile.status,
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    addPost,
    updateNewPostMessage,
    removePost,
    addLike,
    setProfile,
    setFetching,
    setStatus,
})(ProfileContainerWithRouter);

