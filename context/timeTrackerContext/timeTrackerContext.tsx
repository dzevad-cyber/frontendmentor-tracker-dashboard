import React, { createContext, ReactNode, useContext } from 'react';

export const TimeTrackerContext = createContext({});

interface TimeTrackerProps {
  children: ReactNode;
}

export const TimeTrackerProvider: React.FC<TimeTrackerProps> = ({
  children,
}) => {
  return (
    <TimeTrackerContext.Provider value={{ test: 'test' }}>
      {children}
    </TimeTrackerContext.Provider>
  );
};

export const useTimeTrackerContext = () => useContext(TimeTrackerContext);

export default TimeTrackerProvider;
