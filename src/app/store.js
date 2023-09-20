import { configureStore } from "@reduxjs/toolkit";
import seriesReducer from "../features/series/seriesSlice"
import quotesReducer from "../features/quotes/quoteSlice";
import colorsReducer from "../features/colors/colorsSlice"
import imageReducer from "../features/images/imageSlice"
import quoteReducer from "../features/quote/quoteSlice";

export const store = configureStore({
    reducer:{
        series: seriesReducer,
        quotes: quotesReducer,
        colors: colorsReducer,
        image:imageReducer,
        quote: quoteReducer
    }
})