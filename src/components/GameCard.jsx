import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { PixelTitle, NormalText } from './Typography';

const Card = styled(Link)`
  position: relative;
  display: block;
  width: 240px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.cardBg};
  border: 4px double ${({ theme }) => theme.primary};
  box-shadow: 0 0 8px ${({ theme }) => theme.primary};
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.text};
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 14px ${({ theme }) => theme.primary};
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 140px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary};
  display: block;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export default function GameCard({ game }) {
  const [isFav, setIsFav] = useState(false);

  const toggleFav = (e) => {
    e.preventDefault();
    setIsFav(!isFav);
  };

  return (
    <Card to={`/game/${game.id}`}>
      <ImgWrapper>
        <Img src={game.cover} alt={game.title} />
      </ImgWrapper>

      <TitleRow>
        <PixelTitle>{game.title}</PixelTitle>
        <FavoriteButton onClick={toggleFav}>
          {isFav ? <FaHeart /> : <FaRegHeart />}
        </FavoriteButton>
      </TitleRow>

      <NormalText>{game.description}</NormalText>
      <NormalText>🎮 {game.platform}</NormalText>
    </Card>
  );
}
