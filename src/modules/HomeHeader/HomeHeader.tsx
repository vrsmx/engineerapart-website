import * as React from 'react';
import * as styles from './HomeHeader.module.scss';

export const HomeHeader: React.FC = () => {
  return (
    <section
      className={`${styles.hero_component} page-container flex column align-center`}
    >
      <h1 className="txt-center txt-dark">
        Start <br />
        Scale
        <br />
        <span className="txt-blue">Accelerate</span>
      </h1>
      <div className={`${styles.underline_container} flex column align-center`}>
        <h2 className="section-header-underline txt-center txt-max-width-s">
          Build or grow your software development teams with cost-effective
          expert engineers specialized in product driven development engineers
          engineers
        </h2>
        <div className={`${styles.buttons_container} flex justify-center wrap`}>
          <button className="button primary">Get started</button>
          <button className="button clear">Learn more →</button>
        </div>
      </div>
    </section>
  );
};
