import * as React from 'react';
import * as styles from './ReactExpertice.module.scss';

const GridElement: React.FC = () => {
  return (
    <div className={styles.product_grid_element}>
      <div />
      <div />
      <div />
    </div>
  );
};

const SidebarFilter: React.FC = () => {
  return (
    <div className={styles.product_sidebar_filter}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export const ProductAnimation: React.FC = () => {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_navbar}>
        <div className={styles.product_navbar_button} />
        <div className="flex">
          <div className={styles.product_navbar_link} />
          <div className={styles.product_navbar_link} />
          <div className={styles.product_navbar_link} />
          <div className={styles.product_navbar_link} />
        </div>
        <div className={styles.product_navbar_button} />
      </div>
      <div className={styles.product_actionbar}>
        <div className={styles.product_actionbar_search} />
        <div className="flex">
          <div className={styles.product_actionbar_filter} />
          <div className={styles.product_actionbar_filter} />
          <div className={styles.product_actionbar_filter} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className={styles.product_sidebar}>
          <SidebarFilter />
        </div>
        <div className={styles.product_grid}>
          <GridElement />
          <GridElement />
          <GridElement />
          <GridElement />
          <GridElement />
          <GridElement />
          <GridElement />
        </div>
      </div>
    </div>
  );
};
