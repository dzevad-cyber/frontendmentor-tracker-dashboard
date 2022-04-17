import Report from '../report/Report';
import ReportListProps from './reportList.interface';

import styles from './reportList.module.scss';

const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  return (
    <ul className={styles.list}>
      {reports.map((report) => (
        <li key={Math.round(Math.random() * 1000).toString()}>
          <Report report={report} />
        </li>
      ))}
    </ul>
  );
};

export default ReportList;
