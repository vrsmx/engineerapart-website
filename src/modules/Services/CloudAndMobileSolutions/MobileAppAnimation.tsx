import * as React from 'react';
import {motion} from 'framer-motion';
import * as styles from './CloudAndMobileSolutions.module.scss';

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

const notificationsContainerVariants = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 0.25,
    },
  },
};

const navbarContainerVariants = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 0.25,
    },
  },
};

const carrouselVariants = {
  hidden: {
    x: 300,
  },
  visible: {
    x: 0,
    transition: {
      when: 'afterChildren',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const Carrousel: React.FC = () => {
  return (
    <motion.div
      className={styles.mobile_animation_carrousel}
      variants={carrouselVariants}
    >
      <div className={styles.mobile_animation_carrousel_element} />
      <div className={styles.mobile_animation_carrousel_element} />
    </motion.div>
  );
};

export const MobileAppAnimation: React.FC = () => {
  return (
    <div className={styles.mobile_animation_backdrop}>
      <motion.div
        className={styles.mobile_animation_mobile_container}
        initial="hidden"
        whileInView="visible"
        variants={uiContainerVariants}
      >
        <motion.div
          className={styles.mobile_animation_notificationbar}
          variants={notificationsContainerVariants}
        />
        <div className={styles.mobile_animation_row}>
          <motion.div
            className={styles.mobile_animation_banner}
            variants={uiFieldVariants}
          />
        </div>
        <motion.div className={styles.mobile_animation_row}>
          <motion.div
            className={styles.mobile_animation_section_label}
            variants={uiFieldVariants}
          />
          <Carrousel />
        </motion.div>
        <motion.div className={styles.mobile_animation_row}>
          <motion.div
            className={styles.mobile_animation_section_label}
            variants={uiFieldVariants}
          />
          <Carrousel />
        </motion.div>
        <motion.div
          className={styles.mobile_animation_menubar}
          variants={navbarContainerVariants}
        >
          <div />
          <div />
          <div />
        </motion.div>
      </motion.div>
    </div>
  );
};
