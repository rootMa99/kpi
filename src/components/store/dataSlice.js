import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name:"datas",
    initialState:{
        data:[],
    },
    reducers:{
        addData(s,p){
            s.data.pop(...p.payload);
        }
    }
}) 

export const dataActions=dataSlice.actions;
export default dataSlice;