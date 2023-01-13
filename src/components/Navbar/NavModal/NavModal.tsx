import * as React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'gatsby';
import {EmailIcon} from 'src/assets/icons/EmailIcon';
import {LinkedInIcon} from 'src/assets/icons/LinkedInIcon';
import {Modal} from 'src/components/Modal/Modal';
import {usePreventScroll} from 'src/utils/usePreventScroll';

import * as styles from './NavModal.module.scss';
import {slideFromRightAnimation} from 'src/assets/animations';

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const NavModal: React.FC<NavModalProps> = ({isOpen, onClose}) => {
  usePreventScroll({isOpen});

  return (
    <Modal wrapperId="react-portal-modal-container" isOpen={isOpen}>
      <motion.div
        className={`${styles.modal_container} flex column align-center`}
        {...slideFromRightAnimation}
      >
        <div className="full-width flex justify-end">
          <button onClick={onClose} className={styles.close_button}>
            close
          </button>
        </div>
        <ul
          className={`${styles.navlinks} flex column justify-end align-start full-width`}
        >
          <li className={styles.navlink} onClick={onClose}>
            <Link to="/">HOME</Link>
          </li>
          <li className={styles.navlink} onClick={onClose}>
            <Link to="/services">SERVICES</Link>
          </li>
          <li className={styles.navlink} onClick={onClose}>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className={styles.navlink} onClick={onClose}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div
          className={`${styles.modal_details} flex column full-width txt-light`}
        >
          <div
            className="full-width flex align-center pdg-top-s"
            style={{gap: '8px'}}
          >
            <div className="icon-container small">
              <LinkedInIcon
                className="icon-white"
                styles={{width: 25, top: 0, strokeWidth: 0.1}}
              />
            </div>
            <a
              href="https://www.linkedin.com/company/engineerapart"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div
            className="full-width flex align-center pdg-top-xs"
            style={{gap: '8px'}}
          >
            <div className="icon-container small">
              <EmailIcon className="icon-white" styles={{width: 25}} />
            </div>
            <a href="mailto:sales@engineerapart.com">sales@engineerapart.com</a>
          </div>
          {/* <ul className="flex justify-end">
            <li className={styles.legal_link}>
              <Link to="/legals#privacy-policy">
                Privacy Policy and Terms of use
              </Link>
            </li>
            {<li className={styles.legal_link}>
              <Link to="/legals#terms-and-condition">Terms and Condition</Link>
            </li>}
          </ul> */}
        </div>
      </motion.div>
    </Modal>
  );
};

interface NavModalButtonProps {
  light: boolean;
}
export const NavModalButton: React.FC<NavModalButtonProps> = ({light}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        className={`${styles.menu_button} ${
          styles[light ? 'menu_button_light' : 'menu_button_dark']
        }`}
        onClick={() => setIsOpen(true)}
      >
        menu
      </button>

      <NavModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
