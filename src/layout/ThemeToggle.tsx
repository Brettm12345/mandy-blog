import { FC, useCallback } from 'react';

import { useTheme } from 'next-themes';

import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = useCallback(
    () => (theme === 'dark' ? setTheme('light') : setTheme('dark')),
    [theme, setTheme]
  );
  return (
    <button
      className="font-medium rounded-full focus:ring-1 focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-transparent dark:focus:ring-gray-800 text-lg p-4 inline-flex focus:outline-none"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
