import styled from 'styled-components';

export const PixelTitle = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-shadow: 1px 1px ${({ theme }) => theme.shadowText};
  margin-bottom: 1rem;
`;

export const NormalText = styled.p`
  font-family: system-ui, sans-serif;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;
