import * as React from 'react';
import {motion} from 'framer-motion';
import * as styles from './ReactExpertice.module.scss';

const uiContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      ease: 'linear',
      duration: 0.25,
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const uiFieldVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 0.25,
    },
  },
};

const gridVariants = {
  test: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      ease: 'linear',
      duration: 0.25,
      delay: 2.35,
      staggerChildren: 0.15,
    },
  },
};

const gridElementsVariants = {
  test: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 0.25,
    },
  },
};

const GridElement: React.FC = () => {
  return (
    <motion.div
      className={styles.product_grid_element}
      variants={gridElementsVariants}
    >
      <div />
      <div />
      <div />
    </motion.div>
  );
};

const SidebarFilter: React.FC = () => {
  return (
    <motion.div
      className={styles.product_sidebar_filter}
      variants={uiFieldVariants}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
    </motion.div>
  );
};

export const ProductAnimation: React.FC = () => {
  return (
    <div className={styles.product_backdrop}>
      <motion.div
        className={styles.product_container}
        initial="hidden"
        whileInView="visible"
        variants={uiContainerVariants}
      >
        <motion.div className={styles.product_navbar}>
          <motion.div
            className={styles.product_navbar_button}
            variants={uiFieldVariants}
          />
          <motion.div className="flex">
            <motion.div
              className={styles.product_navbar_link}
              variants={uiFieldVariants}
            />
            <motion.div
              className={styles.product_navbar_link}
              variants={uiFieldVariants}
            />
            <motion.div
              className={styles.product_navbar_link}
              variants={uiFieldVariants}
            />
            <motion.div
              className={styles.product_navbar_link}
              variants={uiFieldVariants}
            />
          </motion.div>
          <motion.div
            className={styles.product_navbar_button}
            variants={uiFieldVariants}
          />
        </motion.div>
        <motion.div className={styles.product_actionbar}>
          <motion.div
            className={styles.product_actionbar_search}
            variants={uiFieldVariants}
          />
          <motion.div className="flex">
            <motion.div
              className={styles.product_actionbar_filter}
              variants={uiFieldVariants}
            />
            <motion.div
              className={styles.product_actionbar_filter}
              variants={uiFieldVariants}
            />
            <motion.div
              className={styles.product_actionbar_filter}
              variants={uiFieldVariants}
            />
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-between">
          <motion.div className={styles.product_sidebar}>
            <SidebarFilter />
          </motion.div>
          <motion.div
            className={styles.product_grid}
            initial="test"
            whileInView="show"
            variants={gridVariants}
          >
            <GridElement />
            <GridElement />
            <GridElement />
            <GridElement />
            <GridElement />
            <GridElement />
            <GridElement />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
