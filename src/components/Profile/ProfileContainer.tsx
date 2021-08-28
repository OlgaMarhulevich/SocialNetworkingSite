import React from 'react';
import {connect} from 'react-redux';
import {axiosInstance, PostType, ProfileType} from "../../entities/entities";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {addLike, addPost, removePost, setProfile, updateNewPostMessage, setFetching, setStatus} from "../../redux/profile-reducer";
import {statuses} from "../../redux/users-reducer";
import {Preloader} from "../../common/preloader/Preloader";

interface IProfileProps {
    profile: ProfileType
    posts: Array<PostType>
    newPostMessage: string
    status: string
    isFetching: boolean
    addPost: () => void
    updateNewPostMessage: (postMessage: string) => void
    removePost: (id: number) => void
    addLike: (id: number) => void
    setProfile: (profile: ProfileType) => void
    setFetching: (fetching: boolean) => void
    setStatus: (status: string) => void
}
interface IProfileState {
}

class ProfileContainer extends React.Component<IProfileProps, IProfileState> {

    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.IN_PROGRESS)
            this.props.setFetching(false)
            axiosInstance.get(`profile/2`)
                .then(response => {
                    this.props.setProfile(response.data)
                    this.props.setStatus(statuses.SUCCESS)
                    this.props.setFetching(true)
                })
        }
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

const mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage,
        isFetching: state.usersPage.isFetching,
        status: state.usersPage.status,
    }
}

export default connect(mapStateToProps, {
    addPost,
    updateNewPostMessage,
    removePost,
    addLike,
    setProfile,
    setFetching,
    setStatus,
})(ProfileContainer);

