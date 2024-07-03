import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuItem, findMenuItem, menuList } from '@/menus';

import styles from './styles.module.scss';

export default function PageTitle(props: { actions?: React.ReactElement | undefined }) {
  const location = useLocation();
  const [menuItem, setMenuItem] = useState<MenuItem | null>();

  useEffect(() => {
    const menuItem = findMenuItem(menuList, location.pathname);
    setMenuItem(menuItem);
  }, [location.pathname]);

  return (
    <div className={styles.pageTitleWrapper}>
      <div className={'left-wrapper'}>
        <h1 className={styles.title}>{menuItem ? menuItem.label : 'Page Title'}</h1>
      </div>
      <div className={'right-wrapper'}>{props.actions}</div>
    </div>
  );
}
