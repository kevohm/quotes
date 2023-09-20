import React from "react";
import SingleSerie from "./SingleSerie";
import { states } from "../../utils/data";

import { useSelector } from "react-redux";
import {
  selectAllSeries,
  selectStatus,
  selectError,
} from "./seriesSlice";
import Loader from "../../components/Loader";

const Series = () => {

  const series = useSelector(selectAllSeries);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const renderedSeries = series.map((serie, index) => (
    <SingleSerie key={index} serie={serie} />
  ));

  let content;
  if (status === states.SUCCESSFUL) {
    content = (
      <ol className="list-links">
        {renderedSeries}
      </ol>
    );
  } else if (status === states.FAILED) {
    
    content = <Error error={error}/>;
  } else{
    content = <Loader/>;
  }
  return (
    <div className="container">
      <h2>series</h2>
      {content}
    </div>
  );
};

export default Series;
