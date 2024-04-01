import { createSlice } from "@reduxjs/toolkit";
import { getStartAndEndMonth } from "../functions/utils";


const dataSlice = createSlice({
    name:"datas",
    initialState:{
        data:[],
        kpiOwners:[],
        date:getStartAndEndMonth(new Date())
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