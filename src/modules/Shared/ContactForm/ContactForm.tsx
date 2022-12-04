import * as React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <form className="flex column full-width">
      <div className="flex justify-between" style={{gap: '50px'}}>
        <input
          className="full-width mrg-btm-xs"
          name="name"
          placeholder="Name"
        />
        <input
          className="full-width mrg-btm-xs"
          name="lastName"
          placeholder="Lastname"
        />
      </div>
      <input className="mrg-btm-xs" name="company" placeholder="Company" />
      <input className="mrg-btm-xs" name="phone" placeholder="Phone" />
      <input
        className="mrg-btm-xs"
        name="email"
        placeholder="Email"
        type="email"
      />
      <textarea
        className="mrg-btm-xs"
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
