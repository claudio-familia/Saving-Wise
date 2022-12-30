import { createSlice } from "@reduxjs/toolkit";

const init = {
    token: '',
    isAuthenticated: false,
    username: '',
    email: '',
    firstname: '',
    lastname: ''
}

const AuthReducer = createSlice({
    name: 'auth',
    initialState: init,
    reducers: {
        validateToken(state) {
            return {
                ...state
            }
        },
        loginUser(state, action) {
            state.token = action.payload.token
            state.isAuthenticated = true;
        },
        setProfile(state, action) {
            state.username = action.payload.username
            state.email = action.payload.email
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
        }
    }
});

export const AUTH_ACTIONS = AuthReducer.actions;
export default AuthReducer;