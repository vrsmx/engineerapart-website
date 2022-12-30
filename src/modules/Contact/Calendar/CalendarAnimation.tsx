import * as React from 'react';
import * as styles from './Calendar.module.scss';

export const CalendarAnimation: React.FC = () => {
  return (
    <div className={styles.calendar_animation_grid_background}>
      <div className={styles.calendar_animation_block} />
      <div className={styles.calendar_animation_scheduler_container}>
        <div className={styles.calendar_animation_scheduler_header} />
        <div className={styles.calendar_animation_scheduler_header_details}>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.calendar_animation_scheduler_row}>
          <div />
          <div />
        </div>
        <div className={styles.calendar_animation_scheduler_row_thin}>
          <div />
          <div />
        </div>
        <div className={styles.calendar_animation_scheduler_divider} />
        <div className={styles.calendar_animation_scheduler_row_blue}>
          <div />
          <div />
        </div>
        <div className={styles.calendar_animation_scheduler_row}>
          <div />
          <div />
        </div>
        <div className={styles.calendar_animation_scheduler_row}>
          <div />
          <div />
        </div>
        <div className={styles.calendar_animation_scheduler_actions}>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};
