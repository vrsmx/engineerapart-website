import * as React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'gatsby';
import * as styles from './HomeHeader.module.scss';
import {viewPortAnimation} from 'src/assets/animations';

export const HomeHeader: React.FC = () => {
  return (
    <motion.section
      className={`${styles.hero_component} page-container flex column align-center`}
      {...viewPortAnimation}
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
          engineers specialized in product driven development
        </h2>
        <div className={`${styles.buttons_container} flex justify-center wrap`}>
          <Link className="button primary" to="/#wizard">
            Get started
          </Link>
          <Link className="button clear" to="/services">
            Learn more →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
