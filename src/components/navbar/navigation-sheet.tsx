import { Menu } from 'lucide-react';
import { Button } from '@components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@components/ui/sheet';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-6 pt-8">
        <div className="flex flex-col items-start">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <NavMenu orientation="vertical" className="mt-12" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
