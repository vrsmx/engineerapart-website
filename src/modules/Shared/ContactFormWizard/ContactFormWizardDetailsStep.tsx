import * as React from 'react';
import * as styles from './ContactFormWizard.module.scss';
import {
  ContactFormWizardValues,
  UpdateContactFormWizard,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';
import {Button} from 'src/components/Button/Button';

interface ContactFormWizardStepProps {
  readonly onSubmit: () => void;
  readonly isValid: () => boolean;
  readonly update: UpdateContactFormWizard;
  readonly data: ContactFormWizardValues;
  readonly isSent: boolean;
  readonly loading: boolean;
  readonly error: null | string;
}
export const ContactFormWizardDetailsStep: React.FC<
  ContactFormWizardStepProps
> = ({onSubmit, update, isValid, data, isSent, loading, error}) => {
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

  const disableSubmit = !isValid() || isSent || loading;

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
          disabled={loading || isSent}
        />
        <input
          onChange={handleChange}
          className={`${styles.form_input} full-width mrg-btm-xs`}
          name="lastname"
          placeholder="Lastname"
          value={data.lastname}
          disabled={loading || isSent}
        />
      </div>
      <div className={`${styles.form_row} flex justify-between`}>
        <input
          onChange={handleChange}
          className={`${styles.form_input} full-width`}
          name="company"
          placeholder="Company"
          value={data.company}
          disabled={loading || isSent}
        />
        <input
          onChange={handleChange}
          className={`${styles.form_input} full-width`}
          name="phone"
          placeholder="Phone"
          value={data.phone}
          disabled={loading || isSent}
        />
      </div>
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="email"
        placeholder="Email"
        type="email"
        value={data.email}
        disabled={loading || isSent}
      />
      <div className="flex justify-end">
        <Button
          className={`small primary expand ${disableSubmit ? 'disabled' : ''}`}
          disabled={disableSubmit}
          onClick={handlClick}
          success={isSent}
          error={Boolean(error)}
          loading={loading}
          successMessage="Sent"
          errorMessage="Unable to submit"
        >
          Send
        </Button>
      </div>
    </form>
  );
};
