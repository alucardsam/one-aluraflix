import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaHouse, FaRegSquarePlus } from "react-icons/fa6";
import logo from '@/assets/img/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 4px solid var(--border);
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 25px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 18px;
  font-weight: 700;
  padding: 1em;
  color: ${(props) => (props.$active ? '#2271D1' : 'white')};
  border: 4px solid var(--border);
  border-radius: 15px;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
  }

@media(max-width: 768px) {
    span {
    display: none;
  }
}

@media(min-width: 769px) {
    svg {
    display: none;
  }
}
`;

const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <Nav>
        <StyledLink to="/" $active={location.pathname === '/'}>
          <FaHouse />
          <span>HOME</span>
        </StyledLink>
        <StyledLink to="/newvideo" $active={location.pathname === '/newvideo'}>
          <FaRegSquarePlus />
          <span>NUEVO VÍDEO</span>
        </StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;