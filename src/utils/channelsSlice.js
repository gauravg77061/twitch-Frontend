import { createSlice } from "@reduxjs/toolkit";

const channelsSlice = createSlice({
    name:'channels',
    initialState:[],

    reducers:{
        setChannels:(state,action) =>{
            return action.payload;
        },
        clearChannels: (state,action) =>{
            return [];
        }
    }

})

export const{setChannels,clearChannels}=channelsSlice.actions;

export default channelsSlice.reducer;