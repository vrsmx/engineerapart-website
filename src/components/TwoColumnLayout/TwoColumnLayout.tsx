import * as React from 'react';
import * as styles from 'src/components/TwoColumnLayout/TwoColumnLayout.module.scss';

interface Prop {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  leftSize?: number;
  rightSize?: number;
}
3;
export const TwoColumnLayout: React.FC<Prop> = ({
  leftColumn,
  rightColumn,
  leftSize = 1,
  rightSize = 1,
}) => {
  return (
    <div
      className="two-column-grid mrg-top-m mrg-btm-l"
      style={{gridAutoColumns: `${leftSize}fr ${rightSize}fr`}}
    >
      <div className={styles.left_column_container}>{leftColumn}</div>
      <div className={styles.right_column_container}>{rightColumn}</div>
    </div>
  );
};
