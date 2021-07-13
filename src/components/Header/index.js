import Logo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="Logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-lodo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
