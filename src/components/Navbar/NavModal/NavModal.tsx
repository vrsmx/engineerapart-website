import {Link} from 'gatsby';
import * as React from 'react';
import {Modal} from 'src/components/Modal/Modal';
import * as styles from './NavModal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const NavModal: React.FC<Props> = ({isOpen, onClose}) => {
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
      </div>
    </Modal>
  );
};
