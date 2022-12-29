import * as React from 'react';
import * as styles from './ProcessValue.module.scss';

const ProfileBadge = () => {
  return (
    <div className={styles.process_animation_profile_badge}>
      <div className={styles.process_animation_profile_icon}></div>
      <div className={styles.process_animation_profile_text}></div>
    </div>
  );
};

export const ProcessAnimation: React.FC = () => {
  return (
    <div className={`${styles.process_animation_container} bg-white`}>
      <div className="column-grid-element" style={{gap: 32}}>
        <ProfileBadge />
        <ProfileBadge />
        <ProfileBadge />
        <ProfileBadge />
      </div>

      <div
        className={`${styles.hide_on_mobile} column-grid-element`}
        style={{gap: 32}}
      >
        <ProfileBadge />
        <ProfileBadge />
        <ProfileBadge />
      </div>

      <div
        className={`${styles.hide_on_mobile} column-grid-element`}
        style={{gap: 32}}
      >
        <ProfileBadge />
        <ProfileBadge />
      </div>
    </div>
  );
};
