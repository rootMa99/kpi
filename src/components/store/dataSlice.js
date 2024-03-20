import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name:"datas",
    initialState:{
        data:[],
        kpiOwners:[],
        date:{start:"2024-03-01", end:"2024-03-31"}
    },
    reducers:{
        addData(s,p){
            s.data=p.payload;
        },
        setTime(s, p){
            s.date=p.payload;
        },
        setKpiOwners(s,p){
            s.kpiOwners=p.payload;
        }
    }
}) 

export const dataActions=dataSlice.actions;
export default dataSlice;