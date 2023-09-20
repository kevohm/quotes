import { selectAuthors, selectError, selectStatus } from "./quoteSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { states } from "../../utils/data";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Authors = () => {
  const authors = useSelector(selectAuthors);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  const renderedAuthors = authors.map((author) => (
    <li key={author}>
      <Link to={`/authors/${author}`}>{author}</Link>
    </li>
  ));
  let content
    if (status === states.SUCCESSFUL ){
            content = <ol className="list-links">{renderedAuthors}</ol>
    }else if(status ===  states.FAILED){

        content = <Error error={error}/>
    }
    else{
        content = <Loader/>
    }

  return (
    <section className="container">
      <h2>authors</h2>
      {content}
    </section>
  );
};

export default Authors;
