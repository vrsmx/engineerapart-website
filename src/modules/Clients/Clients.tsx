import * as React from 'react';
import * as styles from './Clients.module.scss';

export const ClientsSection: React.FC = () => {
  return (
    <section className={`${styles.clients_component} flex justify-center`}>
      <div className={`${styles.clients_list}  flex justify-between`}>
        <div className="icon-container gradient-black"></div>
        <div className="icon-container gradient-black"></div>
        <div className="icon-container gradient-black"></div>
        <div className="icon-container gradient-black"></div>
      </div>
    </section>
  );
};
