import profileReducer, {addPost, initialProfileStateType, setProfileStatus} from "../profile-reducer";
let startState: initialProfileStateType
beforeEach(() => {
    startState = {
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: ''
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 1,
            photos: {
                small: '',
                large: ''
            }
        },
        profileStatus: '',
        posts: [
            {id: 1, message: 'It is my first post!', likesCount: 25},
            {id: 2, message: 'How are you?', likesCount: 15},
        ],
        isFetching: false,
    }
})
it('new post should be added', () => {
    let action = addPost('new post')
    let newState = profileReducer(startState, action)
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('new post')
})
it('post should be removed', () => {
    let action = setProfileStatus('new status')
    let newState = profileReducer(startState, action)
    expect(newState.profileStatus).toBe('new status')
})