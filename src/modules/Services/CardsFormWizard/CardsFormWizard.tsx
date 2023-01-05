import * as React from 'react';
import {CrossIcon} from 'src/assets/icons/CrossIcon';
import {Button} from 'src/components/Button/Button';
import {Modal} from 'src/components/Modal/Modal';
import {
  ContactFormWizardValues,
  ListUpdate,
  UpdateContactFormWizard,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';
import {usePreventScroll} from 'src/utils/usePreventScroll';
import * as styles from './CardsFormWizard.module.scss';

interface Props {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly updateList: ListUpdate;
  readonly update: UpdateContactFormWizard;
  readonly onSubmit: () => void;
  readonly data: ContactFormWizardValues;
  readonly isSent: boolean;
  readonly loading: boolean;
  readonly error: null | string;
}
export const CardsFormWizard: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  update,
  data,
  isSent,
  loading,
  error,
}) => {
  usePreventScroll({isOpen});

  const isValid = () => {
    const {hireMethod, name, lastname, company, phone, email} = data;

    return (
      hireMethod.length > 0 &&
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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;

    update((prev) => ({
      ...prev,
      [name as keyof ContactFormWizardValues]: value,
    }));
  };
  const disableSubmit = !isValid() || isSent || loading;

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
              <Button
                className={`small primary expand ${
                  disableSubmit ? 'disabled' : ''
                }`}
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
        </div>
      </div>
    </Modal>
  );
};
