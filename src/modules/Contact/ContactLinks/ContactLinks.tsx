import * as React from 'react';
import {EmailIcon} from 'src/assets/icons/EmailIcon';
import {LinkedInIcon} from 'src/assets/icons/LinkedInIcon';

const CONTACT_EMAIL = 'contact@engineerapart.com';

export const ContactLinks: React.FC = () => {
  return (
    <ul className="flex column">
      <li className="flex align-center mrg-btm-xs" style={{gap: '1em'}}>
        <div className="icon-container">
          <EmailIcon className="icon-blue" styles={{width: 40, height: 40}} />
        </div>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </li>
      <li className="flex align-center mrg-btm-xs" style={{gap: '1em'}}>
        <div className="icon-container">
          <LinkedInIcon
            className="icon-blue"
            styles={{width: 35, height: 35}}
          />
        </div>
        <a href="https://www.linkedin.com/company/engineerapart">LinkedIn</a>
      </li>
    </ul>
  );
};
