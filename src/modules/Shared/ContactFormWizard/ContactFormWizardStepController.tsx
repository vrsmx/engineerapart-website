import * as React from 'react';
import * as styles from './ContactFormWizard.module.scss';

interface Props {
  totalSteps: number;
  doneSteps: number;
  nextStep: () => void;
  backStep: () => void;
}
export const ContactFormWizardStepController: React.FC<Props> = ({
  totalSteps,
  doneSteps,
  nextStep,
  backStep,
}) => {
  return (
    <div className="flex column align-center mrg-btm-l">
      <div className={`${styles.progess_bar_container} mrg-btm-xs`}>
        <div
          className={styles.progess_bar}
          style={{width: `${totalSteps + 1 / doneSteps + 1}%`}}
        />
      </div>
      <div className={`${styles.indicators_grid} pdg-top-xs pdg-btm-xs`}>
        <button
          className={`${styles.indicator_button} txt-blue`}
          onClick={backStep}
          disabled={0 === doneSteps}
        >
          ← Back
        </button>
        <label className={`${styles.indicator_label}`}>Step 1 of 3</label>
        <button
          className={`${styles.indicator_button} txt-blue`}
          onClick={nextStep}
          disabled={doneSteps === totalSteps - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};
