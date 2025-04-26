import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@components/ui/navigation-menu';
import { siteConfig } from '@configs/AppConfigs';

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="items-start gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {siteConfig.navItems.map(link => (
        <NavigationMenuItem key={link.id}>
          <NavigationMenuLink asChild href={`#${link.id}`}>
            <Link
              className="hover:text-lime-600 text-bold"
              href={`#${link.id}`}>
              {link.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
