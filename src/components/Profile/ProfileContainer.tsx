import React from 'react';
import {connect} from 'react-redux';
import {PostType, ProfileType, statuses} from "../../entities/entities";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {
    addLike,
    addPost,
    removePost,
    setProfile,
    updateNewPostMessage,
    setFetching,
    setStatus,
    getProfile
} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router";

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = '2'
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.getProfile(userID)
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
    getProfile: (userID: string) => void
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
    getProfile,
})(ProfileContainerWithRouter);

