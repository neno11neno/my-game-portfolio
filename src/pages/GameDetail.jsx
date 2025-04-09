import { useParams, useNavigate } from 'react-router-dom';
import games from '../data/games.json';
import styled from 'styled-components';
import { PixelTitle, NormalText } from '../components/Typography';

const ScreenWrap = styled.main`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: calc(100vh - 160px);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameWindow = styled.div`
  width: 800px;
  background-color: ${({ theme }) => theme.cardBg};
  border: 4px solid ${({ theme }) => theme.primary};
  padding: 2rem;
  box-shadow: 0 0 12px ${({ theme }) => theme.primary};
  border-radius: 8px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 360px;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;

  button {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
  }
`;

export default function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id.toString() === id);

  if (!game) {
    return (
      <ScreenWrap>
        <GameWindow>
          <PixelTitle>❌ Game Not Found</PixelTitle>
          <NormalText>Sorry, we couldn't find the game you're looking for.</NormalText>
          <button className="nes-btn is-error" onClick={() => navigate('/')}>
            ⬅️ Back to Home
          </button>
        </GameWindow>
      </ScreenWrap>
    );
  }

  return (
    <ScreenWrap>
      <GameWindow>
        <Img src={game.cover} alt={game.title} />
        <PixelTitle>{game.title}</PixelTitle>
        <NormalText>{game.description}</NormalText>
        <NormalText>🎮 Platform: {game.platform}</NormalText>
        <NormalText>🏷️ Tags: {game.tags?.join(', ')}</NormalText>
        <ButtonRow>
          <button className="nes-btn is-warning" onClick={() => navigate(-1)}>
            ⬅️ Back
          </button>
          <button className="nes-btn is-success">
            ▶️ Play Game
          </button>
        </ButtonRow>
      </GameWindow>
    </ScreenWrap>
  );
}
