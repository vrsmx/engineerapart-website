import * as React from 'react';
import * as styles from './TwoColumnLayout.module.scss';

interface Prop {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  leftSize?: number;
  rightSize?: number;
  alignItems?: 'start' | 'end' | 'center';
  className?: string;
}

export const TwoColumnLayout: React.FC<Prop> = ({
  leftColumn,
  rightColumn,
  leftSize = 1,
  rightSize = 1,
  alignItems = 'center',
  className = 'mrg-top-m mrg-btm-l',
}) => {
  return (
    <div
      className={`two-column-grid ${className}`}
      style={{gridAutoColumns: `${leftSize}fr ${rightSize}fr`, alignItems}}
    >
      <div className={styles.left_column_container}>{leftColumn}</div>
      <div className={styles.right_column_container}>{rightColumn}</div>
    </div>
  );
};
