import UserService from '../services/user.service';

export const ACTION_TYPES = {
    AUTHENTICATE_USER_SUCCESS: 'AUTHENTICATE_USER_SUCCESS',
    AUTHENTICATE_USER_FAILED: 'AUTHENTICATE_USER_FAILED',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    LOAD_DATA_FAILED: 'LOAD_DATA_FAILED',
    LOGOUT_USER: 'LOGOUT_USER',
}

export function setAuthenticatedUserSuccess() {
    return { type: ACTION_TYPES.AUTHENTICATE_USER_SUCCESS };
}

export function setAuthenticatedUserFailed() {
    return { type: ACTION_TYPES.AUTHENTICATE_USER_FAILED };
}

export function setLoadingData() {
    return { type: ACTION_TYPES.LOAD_DATA };
}

export function setDataFetchError() {
    return { type: ACTION_TYPES.LOAD_DATA_FAILED };
}

export function setUsersData(data) {
    return { type: ACTION_TYPES.LOAD_DATA_SUCCESS, data };
}

export function logoutUser() {
    return { type: ACTION_TYPES.LOGOUT_USER };
}

export const loginUser = (useername, password, onLoginSuccess) => {
    return async (dispatch) => {
        try {
            dispatch(setLoadingData());
            const response = await UserService.login(useername, password);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('cool-jwt', response.data.token);
            dispatch(setAuthenticatedUserSuccess());
            onLoginSuccess();
        } catch (error) {
            console.log(error);
            dispatch(setAuthenticatedUserFailed());
        }
    }
}

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoadingData());
            const response = await UserService.getAllUsers();
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            dispatch(setUsersData(response.data));
        } catch (error) {
            console.log(error);
            dispatch(setDataFetchError());
        }
    }
}

export const logOut = () => {
    return async (dispatch) => {
            dispatch(logoutUser());
            localStorage.removeItem('cool-jwt');
    }
}

