export interface ContactFormWizardValues {
  readonly services: ReadonlyArray<string>;
  readonly hireMethod: ReadonlyArray<string>;
  readonly name: string;
  readonly lastname: string;
  readonly company: string;
  readonly phone: string;
  readonly email: string;
  readonly message: string;
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
