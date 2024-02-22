import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: null,
    error:null,
    loading:false
}

const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart : (state) =>{
            state.loading = true;
        },
        signInSuccess: (state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFaliure : (state, action) =>{
            state.error=action.payload;
            state.loading=false;
        },
        updateUserStart : (state) =>{
            state.loading = true;
        },
        updateUserSuccess : (state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFaliure : (state, action) =>{
            state.error=action.payload;
            state.loading=false;
        },
        deleteUserStart : (state) =>{
            state.loading = true;
        },
        deleteUserSuccess : (state) =>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFaliure : (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        signoutUserStart : (state) =>{
            state.loading = true;
        },
        signoutUserSuccess : (state) =>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signoutUserFaliure : (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {updateUserFaliure,updateUserSuccess,updateUserStart,signInStart, signInSuccess,signInFaliure ,deleteUserStart,deleteUserSuccess,deleteUserFaliure,signoutUserFaliure,signoutUserStart,signoutUserSuccess}= userSlice.actions;

export default userSlice.reducer;