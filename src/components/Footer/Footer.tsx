import * as React from 'react';
import {Link} from 'gatsby';
import {motion} from 'framer-motion';
import * as styles from './Footer.module.scss';
import {LinkedInIcon} from 'src/assets/icons/LinkedInIcon';
import {viewPortAnimation} from 'src/assets/animations';

export const Footer = () => {
  return (
    <footer className="full-width bg-black txt-light pdg-top-l pdg-btm-l">
      <div className="page-container flex column" style={{gap: '50px'}}>
        <motion.nav
          className={`${styles.footer_nav} flex wrap`}
          {...viewPortAnimation}
        >
          <div className={`${styles.navlink_column} flex column`}>
            <Link className={styles.nav_header} to="/">
              Home
            </Link>
          </div>
          <div className={`${styles.navlink_column} flex column`}>
            <Link className={styles.nav_header} to="/services">
              Services
            </Link>
            <ul className={`${styles.navlinks_container} flex`}>
              <li className={styles.nav_link}>
                <Link to="/services#expertice">React Experts</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/services#other-solutions">Cloud and mobile</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/services#build-your-team">Team building</Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.navlink_column} flex column`}>
            <Link className={styles.nav_header} to="/about-us">
              About us
            </Link>
            <ul className={`${styles.navlinks_container} flex`}>
              <li className={styles.nav_link}>
                <Link to="/about-us#story">Story and goal</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/about-us#leadership">Leadership</Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.navlink_column} flex column`}>
            <Link className={styles.nav_header} to="/contact">
              Contact
            </Link>
            <ul className={`${styles.navlinks_container} flex`}>
              <li className={styles.nav_link}>
                <Link to="/contact#schedule-a-call">Schedule a call</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/contact#form">Message</Link>
              </li>
            </ul>
          </div>
        </motion.nav>
        <motion.div
          {...viewPortAnimation}
          className={`${styles.linkedin_link} full-width flex align-center`}
          style={{gap: 2}}
        >
          <div className="icon-container small">
            <LinkedInIcon
              className="icon-white"
              styles={{width: 25, top: 1.5, strokeWidth: 0}}
            />
          </div>
          <a
            href="https://www.linkedin.com/company/engineerapart"
            target="_blank"
          >
            LinkedIn
          </a>
        </motion.div>
        <motion.div
          className="full-width flex justify-between wrap"
          {...viewPortAnimation}
        >
          <span className={`${styles.legal_link} mrg-btm-s`}>
            © 2023 EngineerApart. All rights reserved.
          </span>
          <ul
            className={`${styles.legal_links_container} flex justify-between`}
          >
            <li className={styles.legal_link}>
              <Link to="/legals#privacy-policy">
                Privacy Policy and Terms of Use
              </Link>
            </li>
            {/* <li className={styles.legal_link}>
              <Link to="/legals#terms-and-condition">Terms and Condition</Link>
            </li> */}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};
