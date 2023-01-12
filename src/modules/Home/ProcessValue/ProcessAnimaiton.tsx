import * as React from 'react';
import {motion, Variants} from 'framer-motion';
import * as styles from './ProcessValue.module.scss';
import {useWindowSize} from 'src/utils/useWindowSize';

const processContainerVariants = {
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
      staggerChildren: 0.5,
    },
  },
};

const firsColVariants = (isSmallView: boolean) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, isSmallView ? 1 : 0.5],
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 1,
    },
  },
});

const secondColVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 0.5],
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 1,
    },
  },
};

const thirdColVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  visible: {
    opacity: [0, 1, 1],
    scale: 1.1,
    transition: {
      when: 'afterChildren',
      ease: 'linear',
      duration: 1,
    },
  },
};

interface ProfileBadgeProps {
  variants?: Variants;
}
const ProfileBadge = ({variants}: ProfileBadgeProps) => {
  return (
    <motion.div
      className={styles.process_animation_profile_badge}
      variants={variants}
    >
      <div className={styles.process_animation_profile_icon}></div>
      <div className={styles.process_animation_profile_text}></div>
    </motion.div>
  );
};

export const ProcessAnimation: React.FC = () => {
  const {isSmallView} = useWindowSize();

  return (
    <div className={styles.proces_animation_backdrop}>
      <motion.div
        className={`${styles.process_animation_container} bg-white`}
        initial="hidden"
        animate="visible"
        variants={processContainerVariants}
      >
        <motion.div
          className="column-grid-element"
          style={{gap: 32}}
          variants={firsColVariants(Boolean(isSmallView))}
        >
          <ProfileBadge variants={isSmallView ? firsColVariants(false) : {}} />
          <ProfileBadge variants={isSmallView ? firsColVariants(false) : {}} />
          <ProfileBadge variants={isSmallView ? secondColVariants : {}} />
          <ProfileBadge variants={isSmallView ? secondColVariants : {}} />
          <ProfileBadge variants={isSmallView ? thirdColVariants : {}} />
        </motion.div>

        <motion.div
          className={`${styles.hide_on_mobile} column-grid-element`}
          style={{gap: 32}}
          variants={secondColVariants}
        >
          <ProfileBadge />
          <ProfileBadge />
          <ProfileBadge />
        </motion.div>

        <motion.div
          className={`${styles.hide_on_mobile} column-grid-element`}
          style={{gap: 32}}
          variants={thirdColVariants}
        >
          <ProfileBadge />
          <ProfileBadge />
        </motion.div>
      </motion.div>
    </div>
  );
};
