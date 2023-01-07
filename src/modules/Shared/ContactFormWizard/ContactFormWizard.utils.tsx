import * as React from 'react';
import {
  ContactFormWizardValues,
  FormKeys,
  ListKeys,
  ListUpdate,
  UpdateContactFormWizard,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';
import {createFormSubmission} from 'src/services/formSubmit';

interface UseContactFormWizard {
  readonly data: ContactFormWizardValues;
  readonly updateList: ListUpdate;
  readonly update: UpdateContactFormWizard;
  readonly onSubmit: () => void;
  readonly isValid: () => boolean;
  readonly loading: boolean;
  readonly error: string | null;
  readonly isSent: boolean;
}
const INITIAL_VALUES: ContactFormWizardValues = {
  services: [],
  hireMethod: [],
  name: '',
  lastname: '',
  company: '',
  phone: '',
  email: '',
  message: '',
};
export const useContactFormWizard = (): UseContactFormWizard => {
  const [loading, setLoading] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [form, setForm] = React.useState(INITIAL_VALUES);

  const onSubmit = async () => {
    setLoading(true);
    const res = await createFormSubmission(form);
    setLoading(false);

    if (res.success) {
      setIsSent(true);
    } else {
      setError(res.error);
    }
  };

  const updateList = (targetId: string, listName: ListKeys) => {
    let newList = [...form[listName]];
    newList =
      newList.indexOf(targetId) === -1
        ? [...newList, targetId]
        : newList.filter((id) => id !== targetId);

    setForm((prev) => ({...prev, [listName]: newList}));
  };

  const isValid = () => {
    const res = Object.keys(form).every(
      (field) => form[field as FormKeys].length > 0
    );
    return res;
  };

  return {
    loading,
    error,
    data: form,
    isSent,
    updateList,
    update: setForm,
    onSubmit,
    isValid,
  };
};
