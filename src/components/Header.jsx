import styled from 'styled-components';
import { useTheme } from '../styles/ThemeProvider';
import { Link } from 'react-router-dom';

const HeaderBar = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.cardBg};
  border-bottom: 4px solid ${({ theme }) => theme.primary};
  box-shadow: inset 0 -4px 0 ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    text-shadow: 1px 1px ${({ theme }) => theme.shadowText};
    margin: 0;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

const ThemeButton = styled.button`
  font-size: 0.75rem;
  font-family: 'Press Start 2P', cursive;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

const NavLink = styled(Link)`
  margin-top: 8px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;


export default function Header() {
  const { toggleTheme, isRedWhite } = useTheme();

  return (
    <HeaderBar>
      <LogoArea>
        <i className="nes-mario"></i>
        <h1>Bobo GAMES</h1>
      </LogoArea>
      <NavMenu>
        <NavLink to="/">START</NavLink>
        <NavLink to="/survey">SURVEY</NavLink>
        <ThemeButton onClick={toggleTheme}>
          {isRedWhite ? 'DARK MODE' : 'LIGHT MODE'}
        </ThemeButton>
      </NavMenu>

    </HeaderBar>
  );
}
