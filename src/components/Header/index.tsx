import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';
import { ContainerHeader, DarkSwitch, LightSwitch } from './styles';

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ContainerHeader>
      <strong>{title}</strong>

      {theme === 'light' ? (
        <LightSwitch size={24} onClick={() => toggleTheme()} />
      ) : (
        <DarkSwitch size={24} onClick={() => toggleTheme()} />
      )}
    </ContainerHeader>
  );
};

export default Header;
