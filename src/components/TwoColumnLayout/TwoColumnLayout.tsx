import * as React from 'react';
import * as styles from './TwoColumnLayout.module.scss';

interface Prop {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  leftSize?: number;
  rightSize?: number;
  alignItems?: 'start' | 'end' | 'center';
  className?: string;
  reverseResponsiveOrder?: boolean;
}

export const TwoColumnLayout: React.FC<Prop> = ({
  leftColumn,
  rightColumn,
  leftSize = 1,
  rightSize = 1,
  alignItems = 'center',
  className = 'mrg-top-m mrg-btm-l',
  reverseResponsiveOrder = false,
}) => {
  const leftContainerClass = reverseResponsiveOrder
    ? 'left_column_container'
    : 'left_column_container_reversed';
  const rightContainerClass = reverseResponsiveOrder
    ? 'right_column_container'
    : 'right_column_container_reversed';

  return (
    <div
      className={`two-column-grid ${className}`}
      style={{gridAutoColumns: `${leftSize}fr ${rightSize}fr`, alignItems}}
    >
      <div className={styles[leftContainerClass]}>{leftColumn}</div>
      <div className={styles[rightContainerClass]}>{rightColumn}</div>
    </div>
  );
};
