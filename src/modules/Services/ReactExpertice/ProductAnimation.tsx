import * as React from 'react';
import * as styles from './ReactExpertice.module.scss';

const GridElement: React.FC = () => {
  return <div className="grid_element"></div>;
};

export const ProductAnimation: React.FC = () => {
  return (
    <div className={styles.product_container}>
      <div className="navbar"></div>
      <div className="sidebar"></div>
      <div className="flex">
        <div className="sidebar"></div>
        <div className="grid">
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
