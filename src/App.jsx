import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Series from "./features/series/Series"
import Quotes from "./features/quotes/Quotes"
import QuoteSeries from "./features/quotes/QuoteSeries"
import QuoteSeriesId from "./features/quotes/QuoteSeriesId"
import Authors from "./features/quotes/Authors"
import AuthorQuotes from "./features/quotes/AuthorQuotes"
import ImageCreator from "./features/colors/ImageCreator"
import ImageCreated from "./features/images/ImageCreated"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Quotes/>}/>
          <Route path="series" element={<Series/>}/>
          <Route path="series/:seriesId" element={<QuoteSeries/>}/>
          <Route path="series/:seriesId/:quoteId" element={<QuoteSeriesId/>}/>
          <Route path="series/:seriesId/:quoteId/image" element={<ImageCreator/>}/>
          <Route path="authors" element={<Authors/>}/>
          <Route path="authors/:authorId" element={<AuthorQuotes/>}/>
          <Route path="series/:seriesId/:quoteId/image/:colorId" element={<ImageCreated/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
