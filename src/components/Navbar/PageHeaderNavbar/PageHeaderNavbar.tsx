import * as React from 'react';
import {Link} from 'gatsby';
import {Logo} from 'src/components/Logo/Logo';
import * as styles from './PageHeaderNavbar.module.scss';

interface Props {
  light?: boolean;
}
export const PageHeaderNavbar: React.FC<Props> = ({light = false}) => {
  const containerClassname = `${styles.navbar_component} page-container flex justify-between`;

  return (
    <nav className={`${light ? 'txt-light bg-black' : ''}`}>
      <div className={containerClassname}>
        <div className="logo-container">
          <Logo light={light} />
        </div>

        <ul className={`${styles.navlinks} flex justify-evenly align-end`}>
          <li className={styles.navlink}>
            <Link to="/">HOME</Link>
          </li>
          <li className={styles.navlink}>
            <Link to="/services">SERVICES</Link>
          </li>
          <li className={styles.navlink}>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li
            className={`${styles.navlink_cta} ${
              light ? 'txt-orange' : ' txt-blue'
            }`}
          >
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
