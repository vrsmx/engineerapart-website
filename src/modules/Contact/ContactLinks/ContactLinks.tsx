import * as React from 'react';

const CONTACT_EMAIL = 'contact@engineerapart.com';

export const ContactLinks: React.FC = () => {
  return (
    <ul className="flex column">
      <li className="flex align-center mrg-btm-xs" style={{gap: '1em'}}>
        <div className="icon-container gradient-black"></div>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </li>
      <li className="flex align-center mrg-btm-xs" style={{gap: '1em'}}>
        <div className="icon-container gradient-black"></div>
        <a href="https://www.linkedin.com/company/engineerapart">LinkedIn</a>
      </li>
    </ul>
  );
};
