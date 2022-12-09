import {Link} from 'gatsby';
import * as React from 'react';
import {Logo} from 'src/components/Logo/Logo';
import {NavModal} from 'src/components/Navbar/NavModal/NavModal';
import * as styles from './PageHeaderNavbar.module.scss';

export const PageHeaderNavbar = ({light = false}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerClassname = `${styles.navbar_component} page-container flex justify-between`;

  return (
    <>
      <nav className={`${light ? 'txt-light bg-black' : ''}`}>
        <div className={containerClassname}>
          <div className="logo-container">
            <Logo light={light} />
          </div>

          <ul className={`${styles.navlinks} flex justify-end align-end`}>
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
          <button
            className={styles.menu_button}
            onClick={() => setIsOpen(true)}
          >
            menu
          </button>
        </div>
      </nav>
      <NavModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
