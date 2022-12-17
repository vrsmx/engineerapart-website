import * as React from 'react';
import * as styles from './ContactFormWizard.module.scss';

interface Props {
  totalSteps: number;
  doneSteps: number;
  done?: boolean;
  nextStep: () => void;
  backStep: () => void;
}
export const ContactFormWizardStepController: React.FC<Props> = ({
  totalSteps,
  doneSteps,
  nextStep,
  backStep,
  done,
}) => {
  const progressValue = done ? 100 : (doneSteps * 100) / totalSteps;

  return (
    <div className="flex column align-center mrg-btm-l">
      <div className={`${styles.progess_bar_container} mrg-btm-xs`}>
        <div
          className={styles.progess_bar}
          style={{width: `${progressValue}%`}}
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
