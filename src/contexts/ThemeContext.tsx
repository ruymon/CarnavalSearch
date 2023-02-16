import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

type Themes = 'light' | 'dark';

interface IThemeContext {
  theme: Themes;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(() => {
    const currentTheme = localStorage.getItem('theme') as Themes;
    return currentTheme ?? 'light';
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light');
    root.classList.remove('dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext };
