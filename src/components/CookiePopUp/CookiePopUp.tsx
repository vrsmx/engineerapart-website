import {Link} from 'gatsby';
import * as React from 'react';
import {Modal} from 'src/components/Modal/Modal';
import * as styles from './CookiePopUp.module.scss';

export const CookiePopUp: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const cookiePreference = !localStorage.getItem('cookie_preference');
    setIsOpen(!cookiePreference);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_preference', 'true');
    setIsOpen(false);
  };

  return (
    <Modal wrapperId="react-portal-modal-container" isOpen={isOpen}>
      <div className={styles.cookie_popup_backdrop}>
        <div
          className={`${styles.cookie_popup_container} flex column page-container bg-black`}
        >
          <h4 className="mrg-btm-xs">Cookie preferences</h4>
          <p className="pdg-btm-xs">
            EngineerApart website does not store any kind of personal
            information or identificaiton data unless provided by yourself. You
            can get more information about our privacy and terms of use{' '}
            <Link to="/legals/#privacy-policy" className={styles.popup_link}>
              here
            </Link>
            .
          </p>
          <div className="flex justify-end pdg-top-xs">
            <button className="button primary" onClick={handleAccept}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
