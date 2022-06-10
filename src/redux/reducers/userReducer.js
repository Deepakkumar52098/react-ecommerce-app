import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        loggedIn:null,
        loading:false,
        error:false
    },
    reducers:{
        loginStart:(state,action)=>{
            state.loading=true
        },
        loginSuccess:(state,action)=>{
            state.loading=false;
            state.loggedIn=action.payload
        },
        loginFailure:(state,action)=>{
            state.loading = false;
            state.error=true;
        }
    }
})

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;