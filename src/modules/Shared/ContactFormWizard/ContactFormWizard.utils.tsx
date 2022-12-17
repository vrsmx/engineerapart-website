import * as React from 'react';
import {
  ContactFormWizardValues,
  ListKeys,
  ListUpdate,
  UpdateContactFormWizard,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';

interface UseContactFormWizard {
  data: ContactFormWizardValues;
  updateList: ListUpdate;
  update: UpdateContactFormWizard;
  onSubmit: () => void;
  loading: boolean;
  error: string | null;
  isSent: boolean;
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
  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState(INITIAL_VALUES);

  const onSubmit = () => {
    console.log('submit', form);
    setIsSent(true);
  };

  const updateList = (targetId: string, listName: ListKeys) => {
    let newList = [...form[listName]];
    newList =
      newList.indexOf(targetId) === -1
        ? [...newList, targetId]
        : newList.filter((id) => id !== targetId);

    setForm((prev) => ({...prev, [listName]: newList}));
  };

  return {
    loading,
    error,
    data: form,
    isSent,
    updateList,
    update: setForm,
    onSubmit: onSubmit,
  };
};
