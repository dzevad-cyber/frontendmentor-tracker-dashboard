import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './Nav.module.scss';

interface NavProps {
  items: string[];
  activeIndex: number;
}

interface INavItem {
  name: string;
  active: boolean;
}

const Nav: React.FC<NavProps> = ({ items, activeIndex }) => {
  const [navItems, setNavItems] = useState<INavItem[]>([]);

  useEffect(() => {
    const initalizeNavItems = items.map((item, index) => {
      if (index === activeIndex) return { name: item, active: true };

      return { name: item, active: false };
    });

    setNavItems(initalizeNavItems);
  }, [items, activeIndex]);

  const filterActiveNavItem = (name: string): void => {
    const newActiveNavItems = [...navItems];

    newActiveNavItems.forEach((item) => {
      if (item.name === name) {
        item.active = true;
      } else {
        item.active = false;
      }
    });

    setNavItems(newActiveNavItems);
  };

  return (
    <ul className={styles.nav}>
      {navItems.map((item) => (
        <li
          onClick={() => filterActiveNavItem(item.name)}
          key={uuid()}
          className={`${styles.navItem} ${item.active && styles.navActive}`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
