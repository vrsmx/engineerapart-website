import * as React from 'react';
import * as styles from './ContactFormWizard.module.scss';

interface ContactFormWizardStepProps {
  readonly onSubmit: () => void;
}
export const ContactFormWizardDetailsStep: React.FC<
  ContactFormWizardStepProps
> = ({onSubmit}) => {
  const handlClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={`${styles.details_container} flex column mrg-btm-s`}>
      <div className={`${styles.form_row} flex justify-between`}>
        <input
          className={`${styles.form_input} full-width mrg-btm-xs`}
          name="name"
          placeholder="Name"
        />
        <input
          className={`${styles.form_input} full-width mrg-btm-xs`}
          name="lastName"
          placeholder="Lastname"
        />
      </div>
      <div className={`${styles.form_row} flex justify-between`}>
        <input
          className={`${styles.form_input} full-width`}
          name="company"
          placeholder="Company"
        />
        <input
          className={`${styles.form_input} full-width`}
          name="phone"
          placeholder="Phone"
        />
      </div>
      <input
        className={`${styles.form_input}`}
        name="email"
        placeholder="Email"
        type="email"
      />
      <div className="flex justify-end">
        <button className="button small primary expand" onClick={handlClick}>
          Send
        </button>
      </div>
    </form>
  );
};
