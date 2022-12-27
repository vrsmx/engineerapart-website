import * as React from 'react';
import {CheckIcon} from 'src/assets/icons/CheckIcon';
import {CrossIcon} from 'src/assets/icons/CrossIcon';
import {Modal} from 'src/components/Modal/Modal';
import {
  ContactFormWizardValues,
  ListUpdate,
  UpdateContactFormWizard,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';
import * as styles from './CardsFormWizard.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  updateList: ListUpdate;
  update: UpdateContactFormWizard;
  onSubmit: () => void;
  data: ContactFormWizardValues;
  isSent: boolean;
  loading: boolean;
}
export const CardsFormWizard: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  update,
  data,
  isSent,
  loading,
}) => {
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
    <Modal wrapperId="react-portal-modal-container" isOpen={isOpen}>
      <div className={styles.wizard_backdrop}>
        <div className={styles.wizard_container}>
          <div className="flex justify-end full-width">
            <div className="icon-container small">
              <button className="cursor-pointer" onClick={onClose}>
                <CrossIcon className="icon-black" styles={{width: 15}} />
              </button>
            </div>
          </div>
          <div className="flex column justify-between align-start full-width pdg-btm-xs">
            <h2 className="section-quote mrg-btm-xs">Leave a message</h2>
            <h3 className="section-header-underline">
              One of our engineers will get in touch with you.
            </h3>
          </div>

          <form
            className={`${styles.details_container} flex column mrg-top-xs mrg-btm-xs`}
          >
            <div className={`${styles.form_row} flex justify-between`}>
              <input
                disabled={loading || isSent}
                onChange={handleChange}
                className={`${styles.form_input} full-width mrg-btm-xs`}
                name="name"
                placeholder="Name"
                value={data.name}
              />
              <input
                disabled={loading || isSent}
                onChange={handleChange}
                className={`${styles.form_input} full-width mrg-btm-xs`}
                name="lastname"
                placeholder="Lastname"
                value={data.lastname}
              />
            </div>
            <input
              disabled={loading || isSent}
              onChange={handleChange}
              className={`${styles.form_input} full-width`}
              name="company"
              placeholder="Company"
              value={data.company}
            />
            <input
              disabled={loading || isSent}
              onChange={handleChange}
              className={`${styles.form_input} full-width`}
              name="phone"
              placeholder="Phone"
              value={data.phone}
            />
            <input
              disabled={loading || isSent}
              onChange={handleChange}
              className={`${styles.form_input}`}
              name="email"
              placeholder="Email"
              type="email"
              value={data.email}
            />
            <div className="flex justify-end mrg-top-xs">
              <button
                className={`button small primary expand ${
                  isSent ? 'clear' : 'primary'
                }`}
                onClick={handlClick}
                disabled={loading || isSent}
              >
                {isSent ? (
                  <CheckIcon className="icon-black" styles={{width: 20}} />
                ) : (
                  'Send'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
