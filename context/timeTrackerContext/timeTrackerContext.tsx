import { createContext, ReactNode, useContext, useReducer } from 'react';

import data from '../../data.json';

export const TimeTrackerContext = createContext({});

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

const reducer = (state, action: { type: string }) => {
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
