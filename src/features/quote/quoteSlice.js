import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {base_url, states} from "../../utils/data"
import axios from "axios"

export const getQuote = createAsyncThunk('quote/getQuote',async({seriesId,quoteId})=>{
    const url = new URL(`${base_url}/quote`)
    url.searchParams.set("series", seriesId)
    url.searchParams.set("id", quoteId)
    url.searchParams.set("count", 1)
    url.searchParams.set("all", false)
    const {data} = await axios.get(url.toString())
    return data
})

export const getRandomQuote = createAsyncThunk('quote/getQuote',async({seriesId,quoteId})=>{
    const url = new URL(`${base_url}/quote`)
    const {data} = axios.get(url.toString())
    return data[0]
})

const initialState = {
    data: null,
    error:null,
    status: states.IDLE
}

const quoteSlice = createSlice({
    name:"quote",
    initialState,
    extraReducers(builder){
        builder.addCase(getQuote.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = states.SUCCESSFUL
        }).addCase(getQuote.rejected, (state, action)=>{
            state.status = states.FAILED
            state.error = action.error.message
        }).addCase(getQuote.pending,(state)=>{
            state.status = states.PENDING
        })
    }
})
export const selectQuote = store=>store.quote.data
export const selectStatus = store=>store.quote.status
export const selectError = store=>store.quote.error

export default quoteSlice.reducer