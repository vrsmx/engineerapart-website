import * as React from 'react';
import * as styles from './TeamBuildingCards.module.scss';

export const TeamBuildingCards: React.FC = () => {
  return (
    <div
      className={`${styles.cards_container} flex justify-center align-stretch wrap mrg-btm-xl`}
    >
      <div
        className={`${styles.cta_card} flex column justify-between align-center round-corner-primary bg-white-shade border-white pdg-top-s pdg-btm-s`}
      >
        <h4 className={`${styles.card_title} txt-center mrg-btm-xs`}>
          Extend your current teams
        </h4>
        <p className="mrg-btm-s">
          A specific position or role, grow the size of your team or extend its
          capabilities with a specific skill set focused to fill a specific role
          and meet your objectives.
        </p>
        <div className="icon-container xlarge gradient-blue mrg-btm-s"></div>
        <button className="button primary full-width">Grow your team</button>
      </div>
      <div
        className={`${styles.cta_card} flex column justify-between align-center round-corner-primary bg-white-shade border-white pdg-top-s pdg-btm-s`}
      >
        <h4 className={`${styles.card_title} txt-center mrg-btm-xs`}>
          New full-size team
        </h4>
        <p className="mrg-btm-s">
          Doesn't matter if you want to delegate an existing project or build a
          new UI, micro-service or both, you will get a fully managed team with
          the roles required to deliver high quality and on time results.
        </p>
        <div className="icon-container xlarge gradient-blue mrg-btm-s"></div>
        <button className="button primary full-width">Hire a team</button>
      </div>
    </div>
  );
};
