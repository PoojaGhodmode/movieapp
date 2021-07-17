import { Link } from "react-router-dom";
//styles
import { Content, Wrapper } from "./BreadCrumb.style";
import PropTypes from "prop-types";

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
          <span>|</span>
          <span>{movieTitle}</span>
        </Link>
      </Content>
    </Wrapper>
  );
};

BreadCrumb.propTyes = {
  movieTitle: PropTypes.string,
};
export default BreadCrumb;
