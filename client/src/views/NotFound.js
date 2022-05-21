import { Link } from "react-router-dom";
import notFound from "../assets/images/notFound.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const NotFound = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFound} alt="Not found" className="img not-Found" />
        <h3>Ohh! Page not found</h3>
        <p>We can find the page you are looking for</p>
        <Link to="/landing">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;
