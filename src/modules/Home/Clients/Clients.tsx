import * as React from 'react';
import {motion} from 'framer-motion';
import * as styles from './Clients.module.scss';
import {viewPortAnimation} from 'src/assets/animations';
import {StaticImage} from 'gatsby-plugin-image';

const iconHoverAnimation = {
  scale: 1.1,
  transition: {duration: 0.15, type: 'linear'},
};

export const ClientsSection: React.FC = () => {
  return (
    <motion.section
      className={`${styles.clients_component} flex justify-center mrg-btm-xl`}
      {...viewPortAnimation}
    >
      <div
        className={`${styles.clients_list} page-container flex justify-between`}
      >
        <motion.a
          href="https://www.paloaltonetworks.com"
          target="_blank"
          whileHover={iconHoverAnimation}
        >
          <div className="icon-container grayscale">
            <StaticImage
              src={'../../../assets/icons/clients/PANW.png'}
              alt="Palo Alto networks Logo"
              width={50}
              aspectRatio={1 / 1}
              transformOptions={{
                fit: 'contain',
                cropFocus: 'attention',
              }}
              backgroundColor="transparent"
              placeholder="blurred"
            />
          </div>
        </motion.a>
        <motion.a
          href="https://www.move.com"
          target="_blank"
          whileHover={iconHoverAnimation}
        >
          <div className="icon-container grayscale">
            <StaticImage
              src={'../../../assets/icons/clients/move-inc.png'}
              alt="Move Inc Logo"
              width={50}
              aspectRatio={1 / 1}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              backgroundColor="transparent"
              placeholder="blurred"
            />
          </div>
        </motion.a>
        <motion.a
          className="flex"
          href="https://www.rubrik.com"
          target="_blank"
          whileHover={iconHoverAnimation}
        >
          <div
            className="icon-container custom-l grayscale"
            style={{height: 'unset'}}
          >
            <StaticImage
              src={'../../../assets/icons/clients/rubrik.png'}
              alt="Rubrik Logo"
              height={150}
              aspectRatio={2000 / 571}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              backgroundColor="transparent"
              placeholder="blurred"
            />
          </div>
        </motion.a>
        <motion.a
          href="https://www.branch.io"
          target="_blank"
          whileHover={iconHoverAnimation}
        >
          <div className="icon-container grayscale">
            <StaticImage
              src={'../../../assets/icons/clients/branch-tree.png'}
              alt="Branch tree Logo"
              width={50}
              aspectRatio={1 / 1}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              backgroundColor="transparent"
              placeholder="blurred"
            />
          </div>
        </motion.a>
        <motion.a
          href="https://www.broadcom.com"
          target="_blank"
          whileHover={iconHoverAnimation}
        >
          <div className="icon-container grayscale">
            <StaticImage
              src={'../../../assets/icons/clients/broadcom.png'}
              alt="Broadcom Logo"
              width={50}
              aspectRatio={1 / 1}
              transformOptions={{fit: 'contain', cropFocus: 'attention'}}
              backgroundColor="transparent"
              placeholder="blurred"
            />
          </div>
        </motion.a>
      </div>
    </motion.section>
  );
};
