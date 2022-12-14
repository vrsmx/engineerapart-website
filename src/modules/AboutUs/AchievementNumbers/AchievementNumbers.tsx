import * as React from 'react';
import * as styles from './AchievementNumbers.module.scss';

interface AchievementNumberCardProps {
  number: string;
  label: string;
}
const AchievementNumberCard: React.FC<AchievementNumberCardProps> = ({
  number,
  label,
}) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.number}>{number}</h4>
      <h5 className={styles.label}>{label}</h5>
    </div>
  );
};

export const AchievementNumbers: React.FC = () => {
  return (
    <div className={`${styles.numbers_container} flex wrap`}>
      <div
        className={`${styles.numbers_container} flex column`}
        style={{flex: 3}}
      >
        <div className={`${styles.numbers_container} flex`}>
          <AchievementNumberCard number="14" label="members" />

          <AchievementNumberCard number="10" label="clients" />
        </div>
        <AchievementNumberCard
          number="$2.3M"
          label="generated client’s revenue"
        />
      </div>
      <div
        className={`${styles.numbers_container} flex column`}
        style={{flex: 1}}
      >
        <AchievementNumberCard number="63" label="projects" />
      </div>
    </div>
  );
};
