import * as React from 'react';
import {motion} from 'framer-motion';
import * as styles from './Calendar.module.scss';

const calendarDayAnimation = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  animate: {
    opacity: 0.4,
    transition: {ease: 'linear', duration: 0.25, delay: 1},
  },
};

const schedulerVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: [0, 0, 1],
    x: [500, 250, 0],
    transition: {
      when: 'beforeChildren',
      ease: 'linear',
      duration: 0.35,
      delay: 1.35,
      staggerChildren: 0.15,
    },
  },
};

const schedulerFieldVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.7,
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 0.25,
    },
  },
};

const schedulerFieldVariantProps = {
  variants: schedulerFieldVariants,
};

export const CalendarAnimation: React.FC = () => {
  return (
    <div className={styles.calendar_animation_grid_background}>
      <motion.div
        className={styles.calendar_animation_block}
        {...calendarDayAnimation}
      />
      <motion.div
        className={styles.calendar_animation_scheduler_container}
        initial="hidden"
        animate="visible"
        variants={schedulerVariants}
      >
        <motion.div
          className={styles.calendar_animation_scheduler_header}
          {...schedulerFieldVariantProps}
        />
        <motion.div
          className={styles.calendar_animation_scheduler_header_details}
          {...schedulerFieldVariantProps}
        >
          <div />
          <div />
          <div />
        </motion.div>
        <motion.div
          className={styles.calendar_animation_scheduler_row}
          {...schedulerFieldVariantProps}
        >
          <div />
          <div />
        </motion.div>
        <motion.div
          className={styles.calendar_animation_scheduler_row_thin}
          {...schedulerFieldVariantProps}
        >
          <div />
          <div />
        </motion.div>
        <motion.div
          className={styles.calendar_animation_scheduler_divider}
          {...schedulerFieldVariantProps}
        />
        <motion.div
          className={styles.calendar_animation_scheduler_row_blue}
          {...schedulerFieldVariantProps}
        >
          <div />
          <div />
        </motion.div>
        <motion.div
          className={styles.calendar_animation_scheduler_row}
          {...schedulerFieldVariantProps}
        >
          <div />
          <div />
        </motion.div>
        <motion.div
          className={styles.calendar_animation_scheduler_row}
          {...schedulerFieldVariantProps}
        >
          <div />
          <div />
        </motion.div>
        <motion.div
          className={styles.calendar_animation_scheduler_actions}
          {...schedulerFieldVariantProps}
        >
          <div />
          <div />
        </motion.div>
      </motion.div>
    </div>
  );
};
