import * as React from 'react';
import * as styles from './Results.module.scss';

export const ResultsAnimation: React.FC = () => {
  return (
    <div className={styles.graph_container}>
      <div className={styles.bars_container}>
        <div className={styles.graph_bar} style={{height: 50}} />
        <div className={styles.graph_bar} style={{height: 150}} />
        <div className={styles.graph_bar} style={{height: 200}} />
        <div className={styles.graph_bar} style={{height: 220}} />
        <div className={styles.graph_bar} style={{height: 350}} />
      </div>
      <div className={styles.divider} />
      <div className={styles.labels_container}>
        <div className={styles.graph_label} />
        <div className={styles.graph_label} />
        <div className={styles.graph_label} />
        <div className={styles.graph_label} />
        <div className={styles.graph_label} />
      </div>
    </div>
  );
};
