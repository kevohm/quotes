import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { states,base_url } from "../../utils/data";

const initialState = {
    data:[],
    status: states.IDLE,
    error:null
}

export const getColors = createAsyncThunk('colors/getColors',async()=>{
    const {data} = await axios.get(`${base_url}/colors`)
    console.log(data)
    return data
})

const colorSlice = createSlice({
    name:"colors",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getColors.fulfilled,(state, action)=>{
            state.data = action.payload
            state.status = states.SUCCESSFUL
        }).addCase(getColors.rejected,(state,action)=>{
            console.log(action)
            state.status = states.FAILED
            state.error = action.error.message
        }).addCase(getColors.pending,(state)=>{
            state.status = states.PENDING
        })
    }
})

export const selectAllColors = store => store.colors.data
export const selectStatus = store => store.colors.status
export const selectError = store => store.colors.error

export default colorSlice.reducer