import * as React from 'react';
import * as styles from './ContactFormWizard.module.scss';

interface ContactFormWizardStepCardProps {
  icon?: React.ReactNode;
  label: string;
  transparent?: boolean;
}

const ContactFormWizardStepCard: React.FC<ContactFormWizardStepCardProps> = ({
  label,
  icon,
  transparent = false,
}) => {
  return (
    <li className={transparent ? styles.card_transparent : styles.card}>
      {!transparent && (
        <div className="icon-container medium gradient-blue">{icon}</div>
      )}
      <label className={`${styles.card_label} mrg-top-xs`}>{label}</label>
    </li>
  );
};

interface ContactFormWizardStepProps {
  options: Array<{id: number; label: string; icon?: React.ReactNode}>;
  fieldName: string;
  title: string;
}
export const ContactFormWizardCardsStep: React.FC<
  ContactFormWizardStepProps
> = ({options, fieldName, title}) => {
  return (
    <div className="flex column mrg-top-s">
      <h4 className={styles.step_title}>{title}</h4>
      <ul className="flex pdg-top-s pdg-btm-s wrap" style={{gap: 30}}>
        {options.map((option) => (
          <ContactFormWizardStepCard
            label={option.label}
            icon={option.icon}
            transparent={!option.icon}
          />
        ))}
      </ul>
    </div>
  );
};
