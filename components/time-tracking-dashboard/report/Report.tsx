import Image from 'next/image';

import { ReportProps } from './report.interface';
import styles from './report.module.scss';

const Report: React.FC<ReportProps> = ({ report }) => {
  const title = report.title.replace(/\s+/g, '-').trim().toLowerCase();

  return (
    <div className={`${styles.report} ${styles[title]}`}>
      <div className={styles.reportBackgroundImage}>
        {report.img?.url && (
          <Image
            src={report.img.url}
            width={report.img.width}
            height={report.img.height}
            alt=''
          />
        )}
      </div>

      {/* report main */}
      <div className={styles.main}>
        <div className={styles.header}>
          <h3 className={styles.title}>{report.title}</h3>
          <div className={styles.menuIcon}>
            <Image
              src='/assets/images/icon-ellipsis.svg'
              width={25}
              height={5}
              alt=''
            />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.current}>
            {report.timeframes.weekly.current}hrs
          </div>
          <div className={styles.previous}>
            Last Week - {report.timeframes.weekly.previous}hrs
          </div>
        </div>
      </div>
      {/* report main end */}
    </div>
  );
};

export default Report;
