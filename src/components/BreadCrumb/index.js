import { Link } from "react-router-dom";
//styles
import { Content, Wrapper } from "./BreadCrumb.style";

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

export default BreadCrumb;
