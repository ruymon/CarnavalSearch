import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

export default useTheme;