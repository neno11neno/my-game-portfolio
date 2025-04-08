import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border: 2px solid ${({ theme }) => theme.border};
  padding: 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  width: 240px;
`;

const GameCard = ({ game }) => (
  <Card>
    <img src={game.cover} alt={game.title} width="100%" />
    <h3>{game.title}</h3>
    <p>{game.description}</p>
    <small>{game.platform}</small>
  </Card>
);

export default GameCard;
