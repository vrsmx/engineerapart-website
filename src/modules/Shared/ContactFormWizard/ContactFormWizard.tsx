import * as React from 'react';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {ContactFormWizardCardsStep} from 'src/modules/Shared/ContactFormWizard/ContactFormWizardCardsStep';
import {ContactFormWizardStepController} from 'src/modules/Shared/ContactFormWizard/ContactFormWizardStepController';
import {ContactFormWizardDetailsStep} from './ContactFormWizardDetailsStep';

const getSteps = (onSubmit: () => void) => [
  <ContactFormWizardCardsStep
    options={[
      {
        id: 1,
        icon: <></>,
        label: 'Cloud services',
      },
      {
        id: 2,
        icon: <></>,
        label: 'Web Apps',
      },
      {
        id: 3,
        icon: <></>,
        label: 'Cloud services',
      },
      {
        id: 4,
        label: 'Not sure',
      },
    ]}
    fieldName="service"
    title="Tell us how we can help"
  />,
  <ContactFormWizardCardsStep
    options={[
      {
        id: 1,
        icon: <></>,
        label: 'Grow a team',
      },
      {
        id: 2,
        icon: <></>,
        label: 'Hire a team',
      },
      {
        id: 3,
        icon: <></>,
        label: 'Both',
      },
      {
        id: 4,
        label: 'Not sure',
      },
    ]}
    fieldName="hire"
    title="How do you want to grow?"
  />,
  <ContactFormWizardDetailsStep onSubmit={onSubmit} />,
];

export const ContactFormWizard = () => {
  const [formStep, setFormStep] = React.useState<number>(0);

  const nextStep = () => setFormStep((prev) => prev + 1);
  const backStep = () => setFormStep((prev) => prev - 1);

  const submitForm = () => {
    console.log('submit');
  };

  const steps = getSteps(submitForm);

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
      />
    </section>
  );
};
