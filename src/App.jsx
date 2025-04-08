import styled from 'styled-components';
import GameCard from './components/GameCard';
import games from './data/games.json';
import { useTheme } from './styles/ThemeProvider';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 2rem;
`;

const Grid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: none;
  cursor: pointer;
`;

function App() {
  const { toggleTheme, isRedWhite } = useTheme();

  return (
    <Container>
      <ToggleButton onClick={toggleTheme}>
        切換主題（目前是 {isRedWhite ? '紅白機' : '藍黑'} 風格）
      </ToggleButton>
      <Grid>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
