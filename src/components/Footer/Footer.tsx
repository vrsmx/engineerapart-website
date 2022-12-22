import * as React from 'react';
import {Link} from 'gatsby';
import * as styles from './Footer.module.scss';
import {LinkedInIcon} from 'src/assets/icons/LinkedInIcon';

export const Footer = () => {
  return (
    <footer className="full-width bg-black txt-light pdg-top-l pdg-btm-l">
      <div className="page-container flex column" style={{gap: '50px'}}>
        <nav className={`${styles.footer_nav} flex wrap`}>
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
                <Link to="/services#expertice">Expertice</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/services#hiring-process">Hiring process</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/services#team-building">Team building</Link>
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
                <Link to="/contact#message">Message</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`${styles.linkedin_link} full-width flex align-center`}
          style={{gap: '0px'}}
        >
          <div className="icon-container">
            <LinkedInIcon className="icon-white" styles={{width: 30, top: 5}} />
          </div>
          <a
            href="https://www.linkedin.com/company/engineerapart"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="full-width flex justify-between wrap">
          <span className={`${styles.legal_link} mrg-btm-s`}>
            © 2022 EngineerApart. All rights reserved.
          </span>
          <ul
            className={`${styles.legal_links_container} flex justify-between`}
          >
            <li className={styles.legal_link}>
              <Link to="/legals#privacy-policy">Privacy Policy</Link>
            </li>
            <li className={styles.legal_link}>
              <Link to="/legals#terms-and-condition">Terms and Condition</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
