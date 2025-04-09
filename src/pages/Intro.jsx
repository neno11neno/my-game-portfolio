import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const flicker = keyframes`
  0%, 100% { opacity: 1 }
  50% { opacity: 0.2 }
`;

const IntroWrap = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  font-family: 'Press Start 2P', cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: red;
  text-shadow: 2px 2px white;
`;

const StartText = styled.p`
  font-size: 0.8rem;
  animation: ${flicker} 1s infinite;
`;

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // 自動跳轉到首頁
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <IntroWrap>
      <Logo>🕹️ 8-BIT GAMES</Logo>
      <StartText>[ PRESS START ]</StartText>
    </IntroWrap>
  );
}
