import data from '../../data.json';

import Image from 'next/image';

import ReportList from './report-list/ReportList';
import styles from './timeTrackingDashboard.module.scss';
import Nav from '../nav/Nav';
import { useTimeTrackerContext } from '../../context/timeTrackerContext/timeTrackerContext';

const TimeTrackingDashboard: React.FC = () => {
  const { state } = useTimeTrackerContext();

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
            Report for <span className={styles.name}>{state.name}</span>
          </p>
        </div>
        <Nav />
      </div>
      <ReportList reports={state.reports} active={state.active} />
    </div>
  );
};

export default TimeTrackingDashboard;
