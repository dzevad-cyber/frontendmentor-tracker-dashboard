import data from '../../data.json';

import { useState } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import ReportList from './report-list/ReportList';
import styles from './timeTrackingDashboard.module.scss';

interface INavItem {
  name: string;
  active: boolean;
}

const TimeTrackingDashboard: React.FC = () => {
  const [navItems, setNavItems] = useState<INavItem[]>([
    { name: 'daily', active: false },
    { name: 'weekly', active: true },
    { name: 'monthly', active: false },
  ]);

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
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.img}>
            <Image
              src={'/assets/images/image-jeremy.png'}
              width={65}
              height={65}
              alt=''
            />
          </div>
          <p className={styles.text}>
            Report for <span className={styles.name}>Jeremy Robson</span>
          </p>
        </div>
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
      </div>
      <ReportList reports={data} />
    </div>
  );
};

export default TimeTrackingDashboard;
