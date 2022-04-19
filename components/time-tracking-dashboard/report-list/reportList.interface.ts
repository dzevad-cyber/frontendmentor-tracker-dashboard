import { IReport } from '../report/report.interface';

export default interface ReportListProps {
  reports: IReport[];
  active: 'daily' | 'weekly' | 'monthly';
}
