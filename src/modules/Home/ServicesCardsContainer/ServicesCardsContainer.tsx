import * as React from 'react';
import {CloudServiceIcon} from 'src/assets/icons/CloudServiceIcon';
import {MobileAppsIcon} from 'src/assets/icons/MobileAppsIcon';
import {WebAppsIcon} from 'src/assets/icons/WebAppsIcon';
import * as styles from './ServicesCardsContainer.module.scss';

export const ServicesCardsContainer: React.FC = () => {
  return (
    <div
      className={`${styles.cards_container} mrg-btm-m full-width gradient-blue-turquioise pdg-top-xs pdg-btm-xs round-corner-primary`}
    >
      <div
        className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
      >
        <div className="icon-container large gradient-blue">
          <CloudServiceIcon
            className="icon-blue"
            styles={{width: 95, height: 95}}
          />
        </div>
        <div className="flex column  align-center">
          <h4 className="txt-blue">Cloud Services</h4>
          <p className="txt-center txt-center">
            Full cloud ecosystems in AWS, Azure or G-Cloud
          </p>
        </div>
      </div>
      <div
        className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
      >
        <div className="icon-container large gradient-blue">
          <WebAppsIcon className="icon-blue" styles={{width: 75, height: 75}} />
        </div>
        <div className="flex column  align-center">
          <h4 className="txt-blue txt-center">Web Apps</h4>
          <p className="txt-center">Efficient UIs in any framework</p>
        </div>
      </div>
      <div
        className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
      >
        <div className="icon-container large gradient-blue">
          <MobileAppsIcon
            className="icon-blue"
            styles={{width: 65, height: 65}}
          />
        </div>
        <div className="flex column align-center">
          <h4 className="txt-blue txt-center">Mobile Apps</h4>
          <p className="txt-center ">Native solutions for Android or IOS</p>
        </div>
      </div>
    </div>
  );
};
