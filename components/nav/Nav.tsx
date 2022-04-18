import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useTimeTrackerContext } from '../../context/timeTrackerContext/timeTrackerContext';
import styles from './Nav.module.scss';

interface NavProps {
  items: string[];
  activeIndex: number;
}

interface INavItem {
  name: string;
  active: boolean;
}

const Nav: React.FC = () => {
  const timeTrackerState = useTimeTrackerContext();

  const filterActiveNavItem = (name: string): void => {
    timeTrackerState.dispatch({ type: name });
  };

  return (
    <ul className={styles.nav}>
      {timeTrackerState.state.reportTypes.map((item) => (
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
