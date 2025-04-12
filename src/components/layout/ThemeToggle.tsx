'use client';

import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  // const { theme } = useAppTheme();
  // const dispatch = useAppDispatch();

  return (
    <Link
      href={''}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Sun className="h-6 w-6 dark:hidden" color="currentColor" />
      <Moon className="hidden h-6 w-6 dark:block" color="currentColor" />
      <span className="sr-only">Toggle theme</span>
    </Link>
  );
}
