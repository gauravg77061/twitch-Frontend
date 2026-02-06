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

       addFollowedChannel: (state, action) => {
  if (!state.followedChannels) {
    state.followedChannels = [];
  }

  if (!state.followedChannels.includes(action.payload)) {
    state.followedChannels.push(action.payload);
  }
},

    }
})

export const{addUser,removeUser,addFollowedChannel}=userSlice.actions;

export default userSlice.reducer;