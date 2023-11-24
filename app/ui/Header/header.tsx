'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  ButtonGroup,
  NavbarMenuItem,
  Button,
} from '@nextui-org/react';
import { MAGILIO } from '@app/ui/fonts/fonts';
import { navItems } from '@app/lib/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="xl"
      isBordered
      isBlurred={false}
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className={`${styles.logo} ${MAGILIO.className}`}
            onClick={() => setIsMenuOpen(false)}
          >
            La Kirghize
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ButtonGroup>
          {navItems.map((item) => (
            <Button
              as={Link}
              href={item.href}
              key={`nav-item-xl-${item.href}`}
              isDisabled={path === item.href}
            >
              {item.pathName}
            </Button>
          ))}
        </ButtonGroup>
      </NavbarContent>

      <NavbarMenu className="gap-0 z-40">
        {navItems.map((item) => (
          <NavbarMenuItem
            key={`nav-item-xs-${item.href}`}
            className="py-[10px]"
          >
            <Link
              className={styles.navItem}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.pathName}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
