'use client';

import React, { MouseEventHandler, useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { navItems } from '@app/lib/link';
import { ROBOTO } from '@app/ui/fonts/fonts';
import { selectIsMobile } from '@app/lib/store/selectors';
import styles from './navigation.module.css';

function Navigation() {
  const [checked, setStatus] = useState<boolean>(false);
  const path = usePathname();
  const isMobile = useSelector(selectIsMobile);

  const handleOnClick: MouseEventHandler = () => setStatus((state) => !state);

  useEffect(() => {
    if (checked) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [checked]);

  return (isMobile ? (
    <nav role="navigation">
      <div className={styles.menuToggle}>

        <input type="checkbox" onClick={handleOnClick} checked={checked} />

        <span />
        <span />
        <span />

        <ul className={styles.menu}>
          {navItems.map(({ href, pathName }) => (
            <Link
              key={href}
              href={href}
              className={clsx(styles.navItem, ROBOTO.className)}
              onClick={handleOnClick}
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