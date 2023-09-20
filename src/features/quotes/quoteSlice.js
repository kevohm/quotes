import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, states, filters } from "../../utils/data";
import axios from "axios";

const initialState = {
    data:[],
    status:'idle',
    error:null
}

export const getQuotes = createAsyncThunk('quotes/getQuotes', async()=>{
        const {data} = await axios.get(`${base_url}/all`)
        return data 
    })


const quoteSlice = createSlice({
    name:"quotes",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getQuotes.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = states.SUCCESSFUL
        }).addCase(getQuotes.rejected, (state,action)=>{
            console.log(action.payload)
            state.status = states.FAILED
            state.error = action.error.message
        }).addCase(getQuotes.pending, (state,action)=>{
            state.status = states.PENDING
        })
    }
})

export const selectAllQuotes = store => store.quotes.data
export const selectQuotesBySeries = (store, seriesId) => store.quotes.data.filter(quote => quote.series === seriesId)
export const selectQuotesBySeriesId = (store, seriesId, quoteId) => store.quotes.data.find((quote)=>(quote.id === quoteId && quote.series === seriesId ))
export const selectStatus = store => store.quotes.status
export const selectError = store => store.quotes.error
export const selectAuthors = (store) => [...new Set(store.quotes.data.map((quote)=>quote.author))]
export const selectQuoteByAuthor = (store, authorId) => store.quotes.data.filter((quote)=>(quote.author === authorId ))

export default quoteSlice.reducer