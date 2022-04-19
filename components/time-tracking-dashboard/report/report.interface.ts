export interface IReport {
  title: string;
  img: {
    url: string;
    width: number;
    height: number;
  };
  timeframes: Record<string, { current: number; previous: number }>;
}

export interface ReportProps {
  title: string;
  img: {
    url: string;
    width: number;
    height: number;
  };
  type: {
    current: number;
    previous: number;
  };
}
