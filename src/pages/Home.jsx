import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import games from '../data/games.json';
import GameCard from '../components/GameCard';
import FeaturedGames from '../components/FeaturedGames';
import CategoryTabs from '../components/CategoryTabs';

const bgPattern = `
  repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.05) 0px,
    rgba(0, 0, 0, 0.05) 1px,
    transparent 1px,
    transparent 4px
  )
`;

const flicker = keyframes`
  0%, 100% { opacity: 1 }
  50% { opacity: 0.8 }
`;

const HomeWrap = styled(motion.main)`
  width: 100%;
  min-height: calc(100vh - 160px);
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.background};
  background-image: ${bgPattern};
  color: ${({ theme }) => theme.text};
`;

const TitleArea = styled.section`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-shadow: 2px 2px ${({ theme }) => theme.shadowText};
  animation: ${flicker} 1.5s infinite;
`;

const Subtitle = styled.p`
  font-family: system-ui, sans-serif;
  font-size: 0.9rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
`;

const GameGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const featuredGames = games.slice(0, 2);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredGames =
    activeCategory === 'all'
      ? games
      : games.filter((g) => g.tags?.includes(activeCategory));

  return (
    <HomeWrap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TitleArea>
        <Title>🕹️ 8-BIT GAMES SELECT</Title>
      </TitleArea>

      <FeaturedGames games={featuredGames} />

      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <GameGrid
        as={motion.div}
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </GameGrid>
    </HomeWrap>
  );
}
