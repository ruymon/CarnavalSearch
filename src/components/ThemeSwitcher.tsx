import { FiMoon, FiSun } from 'react-icons/fi';
import useTheme from '../hooks/useTheme';

export const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button type="button" className="w-fit text-zinc-500" onClick={() => toggleTheme()}>
      {theme === 'dark' ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
};