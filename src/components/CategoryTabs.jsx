import styled from 'styled-components';

const TabBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  background-color: ${({ active, theme }) => (active ? theme.primary : theme.cardBg)};
  color: ${({ active, theme }) => (active ? '#fff' : theme.text)};
  border: 2px solid ${({ theme }) => theme.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    filter: brightness(1.1);
  }
`;

const defaultCategories = [
  { key: 'all', label: 'All', icon: '🎮' },
  { key: 'Adventure', label: 'Adventure', icon: '🧭' },
  { key: 'Shooter', label: 'Shooter', icon: '🔫' },
  { key: 'Puzzle', label: 'Puzzle', icon: '🧠' },
  { key: 'Action', label: 'Action', icon: '⚔️' },
];

export default function CategoryTabs({ active, onChange, categories = defaultCategories }) {
  return (
    <TabBar>
      {categories.map((cat) => (
        <Tab
          key={cat.key}
          active={active === cat.key}
          onClick={() => onChange(cat.key)}
        >
          {cat.icon} {cat.label}
        </Tab>
      ))}
    </TabBar>
  );
}
