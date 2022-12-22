import {Link} from 'gatsby';
import * as React from 'react';
import {EmailIcon} from 'src/assets/icons/EmailIcon';
import {LinkedInIcon} from 'src/assets/icons/LinkedInIcon';
import {Modal} from 'src/components/Modal/Modal';

import * as styles from './NavModal.module.scss';

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const NavModal: React.FC<NavModalProps> = ({isOpen, onClose}) => {
  React.useEffect(() => {
    isOpen && document.body.classList.add('disable-scroll');

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal wrapperId="react-portal-modal-container" isOpen={isOpen}>
      <div className={`${styles.modal_container} flex column align-center`}>
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
            className="full-width flex align-center mrg-btm-xs pdg-top-s"
            style={{gap: '8px'}}
          >
            <div className="icon-container small">
              <LinkedInIcon
                className="icon-white"
                styles={{width: 35, top: -7, strokeWidth: 0.1}}
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
            className="full-width flex align-center mrg-btm-m pdg-top-xs"
            style={{gap: '8px'}}
          >
            <div className="icon-container small">
              <EmailIcon className="icon-white" styles={{width: 35}} />
            </div>
            <a
              href="https://www.linkedin.com/company/engineerapart"
              target="_blank"
            >
              contact@engineerapart.com
            </a>
          </div>
          <ul className="flex justify-between">
            <li className={styles.legal_link}>
              <Link to="/legals#privacy-policy">Privacy Policy</Link>
            </li>
            <li className={styles.legal_link}>
              <Link to="/legals#terms-and-condition">Terms and Condition</Link>
            </li>
          </ul>
        </div>
      </div>
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
