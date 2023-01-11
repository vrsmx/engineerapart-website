import * as React from 'react';
import {motion} from 'framer-motion';
import * as styles from './Results.module.scss';

const graphContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const barsContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      ease: 'linear',
      duration: 0.35,
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const barVariants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 0.25,
    },
  },
};

const labelsContainerVariants = {
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
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const labelVariant = {
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

export const ResultsAnimation: React.FC = () => {
  return (
    <motion.div
      className={styles.graph_container}
      initial="hidden"
      whileInView="visible"
      variants={graphContainerVariants}
    >
      <motion.div
        className={styles.bars_container}
        initial="hidden"
        whileInView="visible"
        variants={barsContainerVariants}
      >
        <motion.div
          className={styles.graph_bar}
          style={{height: 50, originY: 1}}
          variants={barVariants}
        />
        <motion.div
          className={styles.graph_bar}
          style={{height: 150, originY: 1}}
          variants={barVariants}
        />
        <motion.div
          className={styles.graph_bar}
          style={{height: 200, originY: 1}}
          variants={barVariants}
        />
        <motion.div
          className={styles.graph_bar}
          style={{height: 220, originY: 1}}
          variants={barVariants}
        />
        <motion.div
          className={styles.graph_bar}
          style={{height: 350, originY: 1}}
          variants={barVariants}
        />
      </motion.div>
      <motion.div className={styles.divider} />
      <motion.div
        className={styles.labels_container}
        initial="hidden"
        whileInView="visible"
        variants={labelsContainerVariants}
      >
        <motion.div className={styles.graph_label} variants={labelVariant} />
        <motion.div className={styles.graph_label} variants={labelVariant} />
        <motion.div className={styles.graph_label} variants={labelVariant} />
        <motion.div className={styles.graph_label} variants={labelVariant} />
        <motion.div className={styles.graph_label} variants={labelVariant} />
      </motion.div>
    </motion.div>
  );
};
