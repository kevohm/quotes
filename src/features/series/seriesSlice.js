import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url, states } from "../../utils/data";

const initialState = {
    data:[],
    status:"idle",
    error: null
}

export const getSeries = createAsyncThunk('series/getSeries', async()=>{
        const {data} = await axios.get(`${base_url}/series`)
        return data
})

const seriesSlice = createSlice({
    name:'series',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getSeries.fulfilled,(state,action)=>{
            state.status = states.SUCCESSFUL
            state.data = action.payload
        })
        .addCase(getSeries.rejected,(state,action)=>{
            state.status = states.FAILED
            state.error = action.error.message
        })
        .addCase(getSeries.pending,(state,action)=>{
            state.status = states.PENDING
        })
    }
})

export const selectAllSeries = store => store.series.data
export const selectStatus = store => store.series.status
export const selectError = store => store.series.error

export default seriesSlice.reducer