export interface ContactFormWizardValues {
  services: ReadonlyArray<string>;
  hireMethod: ReadonlyArray<string>;
  name: string;
  lastname: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export type UpdateContactFormWizard = React.Dispatch<
  React.SetStateAction<ContactFormWizardValues>
>;

export type ListKeys = keyof Pick<
  ContactFormWizardValues,
  'services' | 'hireMethod'
>;

export type FormKeys = keyof ContactFormWizardValues;

export type ListUpdate = (id: string, listName: ListKeys) => void;
