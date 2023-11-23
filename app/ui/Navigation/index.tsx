'use client';

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@app/lib/link';
import { ROBOTO } from '@app/ui/fonts/fonts';
import { useSelector } from 'react-redux';
import { selectIsMobile } from '@app/lib/store/selectors';
import styles from './Navigation.module.css';

function Navigation() {
  const path = usePathname();
  const isMobile = useSelector(selectIsMobile);

  return (isMobile ? (
    <nav role="navigation">
      <div className={styles.menuToggle}>

        <input type="checkbox" />

        <span />
        <span />
        <span />

        <ul className={styles.menu}>
          {navItems.map(({ href, pathName }) => (
            <Link
              key={href}
              href={href}
              className={clsx(styles.navItem, ROBOTO.className)}
            >
              {pathName}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  ) : (
    <nav className={styles.nav} role="navigation">
      {navItems.map(({ href, pathName }) => (
        <Link
          key={href}
          href={href}
          className={clsx(styles.navItem, ROBOTO.className, path === href && styles.isActive)}
        >
          {pathName}
        </Link>
      ))}
    </nav>
  )
  );
}

export default Navigation;
