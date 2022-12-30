import * as React from 'react';
import * as styles from './CloudAndMobileSolutions.module.scss';

const Carrousel: React.FC = () => {
  return (
    <div className={styles.mobile_animation_carrousel}>
      <div className={styles.mobile_animation_carrousel_element} />
      <div className={styles.mobile_animation_carrousel_element} />
    </div>
  );
};

export const MobileAppAnimation: React.FC = () => {
  return (
    <div className={styles.mobile_animation_mobile_container}>
      <div className={styles.mobile_animation_notificationbar} />
      <div className={styles.mobile_animation_row}>
        <div className={styles.mobile_animation_banner} />
      </div>
      <div className={styles.mobile_animation_row}>
        <div className={styles.mobile_animation_section_label} />
        <Carrousel />
      </div>
      <div className={styles.mobile_animation_row}>
        <div className={styles.mobile_animation_section_label} />
        <Carrousel />
      </div>
      <div className={styles.mobile_animation_menubar}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
