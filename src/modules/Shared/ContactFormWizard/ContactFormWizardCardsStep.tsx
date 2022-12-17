import * as React from 'react';
import * as styles from './ContactFormWizard.module.scss';
import {
  ListKeys,
  ListUpdate,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';

interface Option {
  id: string;
  label: string;
  icon?: React.ReactNode;
}
interface ContactFormWizardStepCardProps {
  handleOnClick: (id: string) => void;
  option: Option;
  isSelected: boolean;
}

const ContactFormWizardStepCard: React.FC<ContactFormWizardStepCardProps> = ({
  option,
  isSelected,
  handleOnClick,
}) => {
  const transparent = !option.icon;
  return (
    <li
      className={`${transparent ? styles.card_transparent : styles.card} ${
        isSelected ? styles.selected : ''
      }`}
      onClick={() => handleOnClick(option.id)}
    >
      {!transparent && (
        <div className="icon-container medium gradient-blue">{option.icon}</div>
      )}
      <label className={`${styles.card_label} mrg-top-xs`}>
        {option.label}
      </label>
    </li>
  );
};

interface ContactFormWizardStepProps {
  options: ReadonlyArray<Option>;
  fieldName: ListKeys;
  title: string;
  selected: ReadonlyArray<string>;
  onUpdate: ListUpdate;
}
export const ContactFormWizardCardsStep: React.FC<
  ContactFormWizardStepProps
> = ({options, fieldName, title, selected, onUpdate}) => {
  const handleOnClick = (id: string) => {
    onUpdate(id, fieldName);
  };

  return (
    <div className="flex column mrg-top-s">
      <h4 className={styles.step_title}>{title}</h4>
      <ul className="flex pdg-top-s pdg-btm-s wrap" style={{gap: 30}}>
        {options.map((option) => (
          <ContactFormWizardStepCard
            key={option.id}
            option={option}
            handleOnClick={handleOnClick}
            isSelected={selected.includes(option.id)}
          />
        ))}
      </ul>
    </div>
  );
};
