import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Wrap = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Slider = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  overflow: hidden;
`;

const SlideImg = styled.img`
  width: 300px;
  height: 180px;
  border: 4px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  transition: opacity 0.5s ease;
  border-radius: 8px;
  box-shadow: 0 0 12px ${({ theme }) => theme.primary};
`;

export default function FeaturedGames({ games }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % games.length);
    }, 3500); // 每 3.5 秒輪播
    return () => clearInterval(timer);
  }, [games.length]);

  return (
    <Wrap>
      <h3 className="nes-text is-primary" style={{ fontFamily: "'Press Start 2P'" }}>
        🌟 Recommend
      </h3>
      <Slider>
        {games.map((game, index) => (
          <SlideImg
            key={game.id}
            src={game.cover}
            alt={game.title}
            style={{ opacity: index === currentIndex ? 1 : 0.15 }}
          />
        ))}
      </Slider>
    </Wrap>
  );
}
