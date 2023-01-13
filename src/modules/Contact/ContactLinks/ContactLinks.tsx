import * as React from 'react';
import {EmailIcon} from 'src/assets/icons/EmailIcon';
import {LinkedInIcon} from 'src/assets/icons/LinkedInIcon';

const CONTACT_EMAIL = 'sales@engineerapart.com';

export const ContactLinks: React.FC = () => {
  return (
    <ul className="flex column">
      <li className="flex align-center mrg-btm-xs" style={{gap: 2}}>
        <div className="icon-container">
          <EmailIcon className="icon-blue" styles={{width: 35, height: 35}} />
        </div>
        <a href={`mailto:${CONTACT_EMAIL}`} className="paragraph-link">
          {CONTACT_EMAIL}
        </a>
      </li>
      <li className="flex align-center mrg-btm-xs" style={{gap: 2}}>
        <div className="icon-container">
          <LinkedInIcon
            className="icon-blue"
            styles={{width: 30, top: 5, strokeWidth: 0.5}}
          />
        </div>
        <a
          href="https://www.linkedin.com/company/engineerapart"
          className="paragraph-link"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};
