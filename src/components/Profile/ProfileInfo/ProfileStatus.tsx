import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

class ProfileInfo extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    offEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.state.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<>
            {this.state.editMode ?
                <div className={s.inputBox}>
                    <input type='text'
                           autoFocus={true}
                           className={s.input}
                           onBlur={this.offEditMode}
                           value={this.state.status}
                           onChange={(e) =>
                               this.setState({status: e.currentTarget.value})
                           }
                           onKeyPress={(e) => {
                               if (e.key === 'Enter') this.props.updateProfileStatus(e.currentTarget.value) }}/>
                    {/*<button*/}
                    {/*    className={s.saveStatusBtn}*/}
                    {/*    onClick={() => this.props.updateProfileStatus(this.state.status)}>Save status</button>*/}
                </div>
                :
                <div className={s.status} onDoubleClick={this.onEditMode}>
                    {this.state.status}
                </div>
            }
        </>)
    }
}

export default ProfileInfo;