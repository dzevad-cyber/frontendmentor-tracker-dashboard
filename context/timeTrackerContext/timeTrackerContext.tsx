import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

import data from '../../data.json';
import { IReport } from '../../components/time-tracking-dashboard/report/report.interface';

const initialState = {
  name: 'Jeremy Robson',
  reportTypes: [
    { name: 'daily', active: false },
    { name: 'weekly', active: true },
    { name: 'monthly', active: false },
  ],
  active: 'weekly',
  reports: [...data],
};
interface State {
  name: string;
  active: string;
  reportTypes: { name: string; active: boolean }[];
  reports: IReport[];
}

interface Action {
  type: string;
}
interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const TimeTrackerContext = createContext<ContextProps>({
  state: initialState,
  dispatch: (action: Action) => {},
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'daily':
      return {
        ...state,
        active: 'daily',
        reportTypes: state.reportTypes.map((report) => {
          if (report.name === action.type) return { ...report, active: true };
          return { ...report, active: false };
        }),
      };
    case 'weekly':
      return {
        ...state,
        active: 'weekly',
        reportTypes: state.reportTypes.map((report) => {
          if (report.name === action.type) return { ...report, active: true };
          return { ...report, active: false };
        }),
      };
    case 'monthly':
      return {
        ...state,
        active: 'monthly',
        reportTypes: state.reportTypes.map((report) => {
          if (report.name === action.type) return { ...report, active: true };
          return { ...report, active: false };
        }),
      };
    default:
      return state;
  }
};

interface TimeTrackerProps {
  children: ReactNode;
}

export const TimeTrackerProvider: React.FC<TimeTrackerProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TimeTrackerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimeTrackerContext.Provider>
  );
};

export const useTimeTrackerContext = () => useContext(TimeTrackerContext);

export default TimeTrackerProvider;
