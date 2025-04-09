import styled from 'styled-components';

const FooterWrap = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  border-top: 4px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 0.75rem;
`;

const FooterText = styled.p`
  font-family: system-ui, sans-serif;
  color: ${({ theme }) => theme.text};
`;

export default function Footer() {
  return (
    <FooterWrap>
      <FooterText>© 2025 by Bobo ｜ Powered by NES.css</FooterText>
      <i className="nes-icon coin is-small" style={{ marginTop: '0.5rem' }}></i>
    </FooterWrap>
  );
}
