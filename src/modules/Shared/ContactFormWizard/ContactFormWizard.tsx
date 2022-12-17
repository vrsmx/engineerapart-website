import * as React from 'react';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {ContactFormWizardCardsStep} from 'src/modules/Shared/ContactFormWizard/ContactFormWizardCardsStep';
import {ContactFormWizardStepController} from 'src/modules/Shared/ContactFormWizard/ContactFormWizardStepController';
import {useContactFormWizard} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.utils';
import {ContactFormWizardDetailsStep} from 'src/modules/Shared/ContactFormWizard/ContactFormWizardDetailsStep';
import {
  ContactFormWizardValues,
  ListUpdate,
  UpdateContactFormWizard,
} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';

interface GetSteps {
  updateList: ListUpdate;
  update: UpdateContactFormWizard;
  onSubmit: () => void;
  data: ContactFormWizardValues;
  isSent: boolean;
}
const getSteps = ({updateList, update, onSubmit, data, isSent}: GetSteps) => [
  <ContactFormWizardCardsStep
    options={[
      {
        id: 'cloud-services',
        icon: <></>,
        label: 'Cloud services',
      },
      {
        id: 'web-apps',
        icon: <></>,
        label: 'Web Apps',
      },
      {
        id: 'mobile-apps',
        icon: <></>,
        label: 'Mobile Apps',
      },
      {
        id: 'not-sure',
        label: 'Not sure',
      },
    ]}
    fieldName="services"
    title="Tell us how we can help"
    selected={data.services}
    onUpdate={updateList}
  />,
  <ContactFormWizardCardsStep
    options={[
      {
        id: 'grow-team',
        icon: <></>,
        label: 'Grow a team',
      },
      {
        id: 'hire-team',
        icon: <></>,
        label: 'Hire a team',
      },
      {
        id: 'both',
        icon: <></>,
        label: 'Both',
      },
      {
        id: 'not-sure',
        label: 'Not sure',
      },
    ]}
    fieldName="hireMethod"
    title="How do you want to grow?"
    selected={data.hireMethod}
    onUpdate={updateList}
  />,
  <ContactFormWizardDetailsStep
    onSubmit={onSubmit}
    update={update}
    data={data}
    isSent={isSent}
  />,
];

export const ContactFormWizard = () => {
  const [formStep, setFormStep] = React.useState<number>(0);
  const {data, updateList, update, onSubmit, loading, error, isSent} =
    useContactFormWizard();

  const nextStep = () => setFormStep((prev) => prev + 1);
  const backStep = () => setFormStep((prev) => prev - 1);

  const steps = getSteps({updateList, update, onSubmit, data, isSent});

  return (
    <section className="page-container flex column mrg-top-xl">
      <SectionHeader
        title={
          <>
            We are ready
            <br /> to start
          </>
        }
      />
      {steps[formStep]}
      <ContactFormWizardStepController
        totalSteps={steps.length}
        doneSteps={formStep}
        nextStep={nextStep}
        backStep={backStep}
        done={isSent}
      />
    </section>
  );
};
