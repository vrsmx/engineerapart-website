import * as React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import * as styles from 'src/components/Logo/Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logo-component">
      <Link to="/">
        <StaticImage
          className={styles.full_logo}
          src={'../../images/full-gradient.png'}
          alt="EngineerApart Logo"
          width={200}
          aspectRatio={196 / 23}
          transformOptions={{fit: 'contain', cropFocus: 'attention'}}
          placeholder="blurred"
        />
        <StaticImage
          className={styles.icon_logo}
          src={'../../images/icon-gradient.png'}
          alt="EngineerApart Logo"
          width={50}
          aspectRatio={100 / 44}
          transformOptions={{fit: 'contain', cropFocus: 'attention'}}
          placeholder="blurred"
        />
      </Link>
    </div>
  );
};
