import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './app-link.module.css';
import { UrlObject } from 'url';

export function Applink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
