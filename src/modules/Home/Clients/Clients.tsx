import * as React from 'react';
import {motion} from 'framer-motion';
import * as styles from './Clients.module.scss';
import {viewPortAnimation} from 'src/assets/animations';

export const ClientsSection: React.FC = () => {
  return (
    <motion.section
      className={`${styles.clients_component} flex justify-center mrg-btm-xl`}
      {...viewPortAnimation}
    >
      <div
        className={`${styles.clients_list} page-container flex justify-between`}
      >
        <div className="icon-container gradient-black"></div>
        <div className="icon-container gradient-black"></div>
        <div className="icon-container gradient-black"></div>
        <div className="icon-container gradient-black"></div>
      </div>
    </motion.section>
  );
};
