import React from 'react';
import {connect} from 'react-redux';
import {PostType, ProfileType} from "../../entities/entities";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {
    addLike,
    addPost,
    removePost,
    setProfile,
    setFetching,
    getProfile,
    getProfileStatus, updateProfileStatus
} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        // @ts-ignore
        let userID = this.props.match.params.userID || this.props.userId.toString()
        if (userID) {
            this.props.getProfile(userID)
            this.props.getProfileStatus(userID)
        }
    }

    componentWillUnmount() {
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
    isFetching: boolean
    profileStatus: string
    userId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    addPost: () => void
    removePost: (id: number) => void
    addLike: (id: number) => void
    setProfile: (profile: ProfileType) => void
    setFetching: (fetching: boolean) => void
    getProfile: (userID: string) => void
    getProfileStatus: (userID: string) => void
    updateProfileStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PathParamsType = { userID: string }
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
        posts: state.profile.posts,
        isFetching: state.profile.isFetching,
        profileStatus: state.profile.profileStatus,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPost,
        removePost,
        addLike,
        setProfile,
        setFetching,
        getProfile,
        getProfileStatus,
        updateProfileStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);

