export interface IReport {
  title: string;
  img: {
    url: string;
    width: number;
    height: number;
  };
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

export interface ReportProps {
  report: IReport;
}
