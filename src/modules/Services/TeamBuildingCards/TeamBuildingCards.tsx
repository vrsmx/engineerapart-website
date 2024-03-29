import * as React from 'react';
import {motion} from 'framer-motion';
import {viewPortAnimation} from 'src/assets/animations';
import {ExtendTeamIcon} from 'src/assets/icons/ExtendTeamIcon';
import {NewTeamIcon} from 'src/assets/icons/NewTeamIcon';
import {useContactFormWizard} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.utils';
import {CardsFormWizard} from '../CardsFormWizard/CardsFormWizard';
import * as styles from './TeamBuildingCards.module.scss';

export const TeamBuildingCards: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {data, updateList, update, onSubmit, loading, error, isSent} =
    useContactFormWizard();

  const handleCardClick = (value: string) => {
    updateList(value, 'hireMethod');
    setIsOpen(true);
  };

  return (
    <motion.div
      {...viewPortAnimation}
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
        <div className="icon-container xlarge gradient-blue mrg-btm-s">
          <ExtendTeamIcon
            className="icon-blue"
            styles={{width: 80, height: 65}}
          />
        </div>
        <button
          className="button primary full-width"
          onClick={() => handleCardClick('grow-team')}
        >
          Grow your team
        </button>
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
        <div className="icon-container xlarge gradient-blue mrg-btm-s">
          <NewTeamIcon className="icon-blue" styles={{width: 80, height: 65}} />
        </div>
        <button
          className="button primary full-width"
          onClick={() => handleCardClick('hire-team')}
        >
          Hire a team
        </button>
      </div>
      <CardsFormWizard
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={data}
        updateList={updateList}
        update={update}
        onSubmit={onSubmit}
        isSent={isSent}
        loading={loading}
        error={error}
      />
    </motion.div>
  );
};
