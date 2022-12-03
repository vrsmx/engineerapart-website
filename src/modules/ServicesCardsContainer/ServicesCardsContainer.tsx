import * as React from 'react';
import * as styles from 'src/modules/ServicesCardsContainer/ServicesCardsContainer.module.scss';

export const ServicesCardsContainer: React.FC = () => {
  return (
    <div
      className={`${styles.cards_container} mrg-btm-m full-width gradient-blue-turquioise pdg-top-xs pdg-btm-xs round-corner-primary`}
    >
      <div
        className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
      >
        <div className="icon-container large gradient-blue mrg-btm-s"></div>
        <h4 className="txt-blue">Cloud Services</h4>
        <p className="txt-center">
          Full cloud ecosystems in AWS, Azure or G-Cloud
        </p>
      </div>
      <div
        className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
      >
        <div className="icon-container large gradient-blue mrg-btm-s"></div>
        <h4 className="txt-blue">Web Apps</h4>
        <p className="txt-center">Efficient UIs in any framework</p>
      </div>
      <div
        className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
      >
        <div className="icon-container large gradient-blue mrg-btm-s"></div>
        <h4 className="txt-blue">Mobile Apps</h4>
        <p className="txt-center">Native solutions for Android or IOS</p>
      </div>
    </div>
  );
};
