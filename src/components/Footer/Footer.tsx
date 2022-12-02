import * as React from 'react';
import {Link} from 'gatsby';
import * as styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className="full-width bg-black txt-light pdg-top-l pdg-btm-l">
      <div className="page-container flex column" style={{gap: '50px'}}>
        <nav className="flex" style={{gap: '75px'}}>
          <div className="flex column" style={{gap: '24px'}}>
            <label className={styles.nav_header}>Home</label>
          </div>
          <div className="flex column" style={{gap: '24px'}}>
            <label className={styles.nav_header}>Services</label>
            <ul className="flex column" style={{gap: '16px'}}>
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
          <div className="flex column" style={{gap: '24px'}}>
            <label className={styles.nav_header}>About us</label>
            <ul className="flex column" style={{gap: '16px'}}>
              <li className={styles.nav_link}>
                <Link to="/about-us#story">Story and goal</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/about-us#leadership">Leadership</Link>
              </li>
            </ul>
          </div>
          <div className="flex column" style={{gap: '24px'}}>
            <label className={styles.nav_header}>Contact</label>
            <ul className="flex column" style={{gap: '16px'}}>
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
          className="full-width flex justify-end align-center"
          style={{gap: '8px'}}
        >
          <div className="icon-container gradient-white"></div>
          <a
            href="https://www.linkedin.com/company/engineerapart"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="full-width flex justify-between">
          <span className={styles.legal_link}>
            © 2022 EngineerApart. All rights reserved.
          </span>
          <ul className="flex" style={{gap: '30px'}}>
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
