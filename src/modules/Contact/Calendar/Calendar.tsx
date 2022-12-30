import * as React from 'react';
import * as styles from './Calendar.module.scss';
import {CalendarAnimation} from './CalendarAnimation';

export const Calendar: React.FC = () => {
  return (
    <div
      className={`${styles.calendar_container} gradient-blue-turquioise flex alig-center round-corner-primary`}
      style={{height: '395px'}}
    >
      <CalendarAnimation />
    </div>
  );
};
