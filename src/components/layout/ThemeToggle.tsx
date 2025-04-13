'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    // <Switch
    //   defaultChecked
    //   color="success"
    //   onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    // />
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Sun className="h-6 w-6 dark:hidden" color="currentColor" />
      <Moon className="hidden h-6 w-6 dark:block" color="currentColor" />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
