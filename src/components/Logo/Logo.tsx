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
        <div className={styles.full_logo}>
          {light ? (
            <StaticImage
              src={'../../assets/images/full-white.png'}
              alt="EngineerApart Logo"
              width={200}
              aspectRatio={196 / 23}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              placeholder="blurred"
            />
          ) : (
            <StaticImage
              src={'../../assets/images/full-gradient.png'}
              alt="EngineerApart Logo"
              width={200}
              aspectRatio={196 / 23}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              placeholder="blurred"
            />
          )}
        </div>
        <div className={styles.icon_logo}>
          {light ? (
            <StaticImage
              src={'../../assets/images/icon-white.png'}
              alt="EngineerApart Logo"
              width={50}
              aspectRatio={100 / 44}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              placeholder="blurred"
            />
          ) : (
            <StaticImage
              src={'../../assets/images/icon-gradient.png'}
              alt="EngineerApart Logo"
              width={50}
              aspectRatio={100 / 44}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              placeholder="blurred"
            />
          )}
        </div>
      </Link>
    </div>
  );
};
