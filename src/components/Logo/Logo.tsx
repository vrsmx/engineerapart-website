import * as React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import * as styles from './Logo.module.scss';

interface Props {
  light?: boolean;
}
export const Logo: React.FC<Props> = ({light = false}) => {
  return (
    <div className="logo-component">
      <Link to="/">
        {light ? (
          <StaticImage
            src={'../../images/full-white.png'}
            className={styles.full_logo}
            alt="EngineerApart Logo"
            width={200}
            aspectRatio={196 / 23}
            transformOptions={{fit: 'contain', cropFocus: 'attention'}}
            placeholder="blurred"
          />
        ) : (
          <StaticImage
            className={styles.full_logo}
            src={'../../images/full-gradient.png'}
            alt="EngineerApart Logo"
            width={200}
            aspectRatio={196 / 23}
            transformOptions={{fit: 'contain', cropFocus: 'attention'}}
            placeholder="blurred"
          />
        )}
        {light ? (
          <StaticImage
            className={styles.icon_logo}
            src={'../../images/icon-white.png'}
            alt="EngineerApart Logo"
            width={50}
            aspectRatio={100 / 44}
            transformOptions={{fit: 'contain', cropFocus: 'attention'}}
            placeholder="blurred"
          />
        ) : (
          <StaticImage
            className={styles.icon_logo}
            src={'../../images/icon-gradient.png'}
            alt="EngineerApart Logo"
            width={50}
            aspectRatio={100 / 44}
            transformOptions={{fit: 'contain', cropFocus: 'attention'}}
            placeholder="blurred"
          />
        )}
      </Link>
    </div>
  );
};
