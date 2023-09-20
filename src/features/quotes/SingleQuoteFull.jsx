import React from "react";
import { Link, useNavigate} from "react-router-dom";

const SingleQuoteFull = ({ quote, series, author, id }) => {
  const navigate = useNavigate()
  return (
    <article className="box-shadow mx-auto">
      <h3 className="text-start">{quote}</h3>
      <div className="flex items-center space-x-5">
        <div className="row-items">
          <h4>from</h4>
          <Link
            to={`/series/${series}`}
            className="hover-clickable"
          >
            {series}
          </Link>
        </div>
        <div className="row-items">
          <h4>by</h4>
          <Link
            to={`/authors/${author}`}
            className="hover-clickable"
          >
            {author ? author : "unknown author"}
          </Link>
        </div>
      </div>
      <div className="row-items justify-between w-full">
        <Link to={`/series/${series}/${id}/image`} className="border rounded capitalize p-2 hover:border-[rgba(0,0,0,.17)] text-black-light" >generate image</Link>
        <button className='bg-black text-white' onClick={() => navigate(-1)}>go back</button>
      </div>
    </article>
  );
};

export default SingleQuoteFull;
