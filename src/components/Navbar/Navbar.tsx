import * as React from 'react';
import {Link} from 'gatsby';
import {Logo} from 'src/components/Logo/Logo';
import * as styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  return (
    <div className={`${styles.navbar_component} flex justify-between`}>
      <div className="logo-container">
        <Logo />
      </div>

      <ul className={`${styles.navlinks} flex justify-evenly`}>
        <li className={styles.navlink}>
          <Link to="/">HOME</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/services">SERVICES</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/about-us">ABOUT US</Link>
        </li>
        <li className={`${styles.navlink_cta}`}>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};
