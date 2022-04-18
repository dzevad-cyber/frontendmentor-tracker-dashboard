import Image from 'next/image';

import { ReportProps } from './report.interface';
import styles from './report.module.scss';

const Report: React.FC<ReportProps> = ({ title, img, type }) => {
  const getReportType = (title: string): string => {
    const wordCount = title.split(' ').length;
    if (wordCount > 1) return title.replace(/\s+/g, '-').trim().toLowerCase();

    return title.toLowerCase();
  };

  return (
    <div className={`${styles.report} ${styles[getReportType(title)]}`}>
      <div className={styles.reportBackgroundImage}>
        {img?.url && (
          <Image
            src={img.url}
            width={img.width}
            height={img.height}
            alt='user profile'
          />
        )}
      </div>

      {/* report main */}
      <div className={styles.main}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.menuIcon}>
            <Image
              src='/assets/images/icon-ellipsis.svg'
              width={25}
              height={5}
              alt='three dots'
            />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.current}>{type.current}hrs</div>
          <div className={styles.previous}>Last Week - {type.previous}hrs</div>
        </div>
      </div>
      {/* report main end */}
    </div>
  );
};

export default Report;
