import * as React from 'react';
import * as styles from './ContactForm.module.scss';

export const ContactForm: React.FC = () => {
  return (
    <form className="flex column full-width">
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
      <input
        className={`${styles.form_input}`}
        name="company"
        placeholder="Company"
      />
      <input
        className={`${styles.form_input}`}
        name="phone"
        placeholder="Phone"
      />
      <input
        className={`${styles.form_input}`}
        name="email"
        placeholder="Email"
        type="email"
      />
      <textarea
        className={`${styles.form_input}`}
        name="message"
        placeholder="Message"
        cols={30}
        rows={10}
      />
      <div className="flex justify-end">
        <button className="button small primary expand">Send</button>
      </div>
    </form>
  );
};
