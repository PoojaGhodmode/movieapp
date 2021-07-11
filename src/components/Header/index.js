import Logo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TMDBLogoImg  } from './Header.styles'

const Header = () => {
    return (  
        <Wrapper>
            <Content>
                <LogoImg src={Logo} alt="Logo" />
                <TMDBLogoImg src = {TMDBLogo} alt = "tmdb-lodo"/>
            </Content>
        </Wrapper>
    );
}
 
export default Header;