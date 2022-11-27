import * as React from 'react';
import * as styles from './SectionHeader.module.scss';

interface Props {
  title: React.ReactNode;
  underline?: React.ReactNode;
  underlineAlign?: 'justify-start' | 'justify-end';
}
export const SectionHeader: React.FC<Props> = ({
  underlineAlign = 'justify-end',
  title,
  underline,
}) => {
  return (
    <div className="section-header-component flex column">
      <h3 className={`${styles.section_header} section-header`}>{title}</h3>
      {underline && (
        <div className={`full-width flex ${underlineAlign}`}>
          <p className="header-underline section-header-underline">
            {underline}
          </p>
        </div>
      )}
    </div>
  );
};
