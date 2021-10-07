import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

//profile selectors
export const getPosts = (state: AppStateType) => state.profile.posts
export const getProfileState = (state: AppStateType) => state.profile.profile
export const getIsFetchingProfile = (state: AppStateType) => state.profile.isFetching
export const getProfileStatusState = (state: AppStateType) => state.profile.profileStatus

//auth selectors
export const getIsAuth = (state: AppStateType) => state.auth.isAuth
export const getLogin = (state: AppStateType) => state.auth.login
export const getUserId = (state: AppStateType) => state.auth.id

//dialogs selectors
export const getDialogs = (state: AppStateType) => state.dialogs.dialogs

//users selectors
export const getUsersState = (state: AppStateType) => state.users.users
export const getFilterForSearch = (state: AppStateType) => state.users.filterForSearch
//reselector
export const getFilteredUsers = createSelector(getUsersState, getFilterForSearch, (users, filter) => {
    return users.filter(u => u.name.toUpperCase().indexOf(filter.toUpperCase()) > -1)
})

export const getPageSize = (state: AppStateType) => state.users.pageSize
export const getTotalUsersCount = (state: AppStateType) => state.users.totalUsersCount
export const getActivePage = (state: AppStateType) => state.users.activePage
export const getIsLoadingUsers = (state: AppStateType) => state.users.isLoading
export const getIsFollowing = (state: AppStateType) => state.users.isFollowing
