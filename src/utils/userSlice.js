import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:null,

    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        },

        addFollowedChannels:(state,action)=>{
            if(!state.addFollowedChannels){
                state.addFollowedChannels=[];
            }
            state.addFollowedChannels.push(action.payload);
        }
    }
})

export const{addUser,removeUser}=userSlice.actions;

export default userSlice.reducer;