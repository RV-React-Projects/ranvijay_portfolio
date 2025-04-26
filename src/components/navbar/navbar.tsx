import { Download } from 'lucide-react';
import { Button } from '@components/ui/button';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';

export default function NavBar() {
  return (
    <nav className="z-50 fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 sm:mx-6 lg:mx-[9%] lg:px-[1%] mx-auto rounded-full shadow-md">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          {/* <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full">
              Contact me
            </Button> */}
          <Button className="rounded-full">
            Download CV
            <Download size={18} />
          </Button>
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
    </nav>
  );
}
