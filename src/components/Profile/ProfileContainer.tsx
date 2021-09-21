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
    setFetching,
    setStatus,
    getProfile,
    getProfileStatus, updateProfileStatus
} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = '18931'
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.getProfile(userID)
            this.props.getProfileStatus(userID)
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
    status: string
    isFetching: boolean
    profileStatus: string
}
type MapDispatchPropsType = {
    addPost: () => void
    removePost: (id: number) => void
    addLike: (id: number) => void
    setProfile: (profile: ProfileType) => void
    setFetching: (fetching: boolean) => void
    setStatus: (status: string) => void
    getProfile: (userID: string) => void
    getProfileStatus: (userID: string) => void
    updateProfileStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PathParamsType = { userID: string }
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
        posts: state.profile.posts,
        isFetching: state.profile.isFetching,
        status: state.profile.status,
        profileStatus: state.profile.profileStatus,
    }
}


export default compose<React.ComponentType> (
    connect(mapStateToProps, {
        addPost,
        removePost,
        addLike,
        setProfile,
        setFetching,
        setStatus,
        getProfile,
        getProfileStatus,
        updateProfileStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

