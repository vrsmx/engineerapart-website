import * as React from 'react';
import {ContactFormWizardValues} from '../ContactFormWizard/ContactFormWizard.types';
import {useContactFormWizard} from '../ContactFormWizard/ContactFormWizard.utils';
import * as styles from './ContactForm.module.scss';

export const ContactForm: React.FC = () => {
  const {data, onSubmit, isSent, update} = useContactFormWizard();

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

  return (
    <form className="flex column full-width">
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
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="company"
        placeholder="Company"
        value={data.company}
      />
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="phone"
        placeholder="Phone"
        value={data.phone}
      />
      <input
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="email"
        placeholder="Email"
        type="email"
        value={data.email}
      />
      <textarea
        onChange={handleChange}
        className={`${styles.form_input}`}
        name="message"
        placeholder="Message"
        cols={30}
        rows={10}
        value={data.message}
      />
      <div className="flex justify-end">
        <button
          className="button small primary expand"
          disabled={isSent}
          onClick={handlClick}
        >
          Send
        </button>
      </div>
    </form>
  );
};
