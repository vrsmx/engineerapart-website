import * as React from 'react';
import {Button} from 'src/components/Button/Button';
import {ContactFormWizardValues} from '../ContactFormWizard/ContactFormWizard.types';
import {useContactFormWizard} from '../ContactFormWizard/ContactFormWizard.utils';
import * as styles from './ContactForm.module.scss';

export const ContactForm: React.FC = () => {
  const {data, onSubmit, isSent, error, update, loading} =
    useContactFormWizard();

  const isValid = () => {
    const {name, lastname, company, phone, email} = data;

    return (
      name.length > 0 &&
      lastname.length > 0 &&
      company.length > 0 &&
      phone.length > 0 &&
      email.length > 0
    );
  };

  const handlClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.currentTarget;

    update((prev) => ({
      ...prev,
      [name as keyof ContactFormWizardValues]: value,
    }));
  };
  const disableSubmit = !isValid() || isSent || loading;

  return (
    <form className="flex column full-width">
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
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="company"
        placeholder="Company"
        value={data.company}
        disabled={loading || isSent}
      />
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="phone"
        placeholder="Phone"
        value={data.phone}
        disabled={loading || isSent}
      />
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="email"
        placeholder="Email"
        type="email"
        value={data.email}
        disabled={loading || isSent}
      />
      <textarea
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="message"
        placeholder="Message"
        cols={30}
        rows={10}
        value={data.message}
        disabled={loading || isSent}
      />
      <div className="flex justify-end">
        <Button
          className={`button primary expand ${disableSubmit ? 'disabled' : ''}`}
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
