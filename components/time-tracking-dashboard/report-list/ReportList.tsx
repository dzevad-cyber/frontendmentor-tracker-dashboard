import { v4 as uuid } from 'uuid';

import Report from '../report/Report';
import ReportListProps from './reportList.interface';
import { IReport } from '../report/report.interface';

import styles from './reportList.module.scss';

const ReportList: React.FC<ReportListProps> = ({ reports, active }) => {
  return (
    <ul className={styles.list}>
      {reports.map((report) => (
        <li key={uuid()}>
          <Report
            title={report.title}
            img={report.img}
            type={report.timeframes[active]}
          />
        </li>
      ))}
    </ul>
  );
};

export default ReportList;
