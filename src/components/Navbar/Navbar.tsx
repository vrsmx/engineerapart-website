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
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/about-us">ABOUT US</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};
