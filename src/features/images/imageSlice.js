import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, states } from "../../utils/data";
import axios from "axios";

const initialState = {
    data:null,
    status:states.IDLE,
    error:null
}

export const getImage = createAsyncThunk('image/getImage',async(query,thunk)=>{
    const {seriesId,quoteId,colorId} = query
    const url = new URL(`${base_url}/pic/solid`)
    url.searchParams.set('series', seriesId)
    url.searchParams.set('id', quoteId)
    url.searchParams.set('background_color', colorId)
    url.searchParams.set('x', 600)
    url.searchParams.set('y', 400)
    url.searchParams.set('text_size', 25)
    await axios.get(url.toString())
    return url.toString()
})

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getImage.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = states.SUCCESSFUL
        })
        .addCase(getImage.rejected, (state, action)=>{
            state.error = action.error.message
            state.status = states.FAILED
        }).addCase(getImage.pending,(state)=>{
            state.status = states.PENDING
        })
    }
})

export const selectImage = store => store.image.data
export const selectError = store => store.image.error
export const selectStatus = store => store.image.status

export default imageSlice.reducer