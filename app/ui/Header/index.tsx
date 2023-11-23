'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import Navigation from '@app/ui/Navigation';
import { MAGILIO } from '@app/ui/fonts/fonts';
import styles from './Header.module.css';

function Header() {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  return (
    <header className={clsx(styles.header, visible ? styles.visible : styles.hidden)}>
      <div className={styles.container}>
        <Link href="/" className={clsx(styles.logo, MAGILIO.className)}>
          La Kirghize
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
