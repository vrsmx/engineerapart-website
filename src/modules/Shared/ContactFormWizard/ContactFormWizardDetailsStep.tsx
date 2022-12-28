import * as React from 'react';
import * as styles from './ContactFormWizard.module.scss';
import {
  ContactFormWizardValues,
  UpdateContactFormWizard,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';

interface ContactFormWizardStepProps {
  readonly onSubmit: () => void;
  readonly isValid: () => boolean;
  readonly update: UpdateContactFormWizard;
  readonly data: ContactFormWizardValues;
  readonly isSent: boolean;
}
export const ContactFormWizardDetailsStep: React.FC<
  ContactFormWizardStepProps
> = ({onSubmit, update, isValid, data, isSent}) => {
  const handlClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;

    update((prev) => ({
      ...prev,
      [name as keyof ContactFormWizardValues]: value,
    }));
  };

  return (
    <form
      className={`${styles.details_container} flex column mrg-top-s mrg-btm-s`}
    >
      <div className={`${styles.form_row} flex justify-between`}>
        <input
          onChange={handleChange}
          className={`${styles.form_input} full-width mrg-btm-xs`}
          name="name"
          placeholder="Name"
          value={data.name}
        />
        <input
          onChange={handleChange}
          className={`${styles.form_input} full-width mrg-btm-xs`}
          name="lastname"
          placeholder="Lastname"
          value={data.lastname}
        />
      </div>
      <div className={`${styles.form_row} flex justify-between`}>
        <input
          onChange={handleChange}
          className={`${styles.form_input} full-width`}
          name="company"
          placeholder="Company"
          value={data.company}
        />
        <input
          onChange={handleChange}
          className={`${styles.form_input} full-width`}
          name="phone"
          placeholder="Phone"
          value={data.phone}
        />
      </div>
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="email"
        placeholder="Email"
        type="email"
        value={data.email}
      />
      <div className="flex justify-end">
        <button
          className="button small primary expand"
          onClick={handlClick}
          disabled={isSent || !isValid()}
        >
          Send
        </button>
      </div>
    </form>
  );
};
