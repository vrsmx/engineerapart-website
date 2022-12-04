import * as React from 'react';
import * as styles from './Calendar.module.scss';

export const Calendar: React.FC = () => {
  return (
    <div
      className={`${styles.calendar_container} gradient-blue-turquioise round-corner-primary`}
      style={{height: '395px'}}
    ></div>
  );
};
