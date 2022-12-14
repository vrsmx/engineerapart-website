import * as React from 'react';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {ContactFormWizardCardsStep} from 'src/modules/Shared/ContactFormWizard/ContactFormWizardCardsStep';
import {ContactFormWizardStepController} from 'src/modules/Shared/ContactFormWizard/ContactFormWizardStepController';

const steps = [
  <ContactFormWizardCardsStep
    options={[
      {
        icon: <></>,
        label: 'Cloud services',
      },
      {
        icon: <></>,
        label: 'Web Apps',
      },
      {
        icon: <></>,
        label: 'Cloud services',
      },
      {
        label: 'Not sure',
      },
    ]}
    fieldName="service"
    title="Tell us how we can help"
  />,
  <ContactFormWizardCardsStep
    options={[
      {
        icon: <></>,
        label: 'Grow a team',
      },
      {
        icon: <></>,
        label: 'Hire a team',
      },
      {
        icon: <></>,
        label: 'Both',
      },
      {
        label: 'Not sure',
      },
    ]}
    fieldName="hire"
    title="How do you want to grow?"
  />,
];

export const ContactFormWizard = () => {
  const [formStep, setFormStep] = React.useState<number>(0);

  const nextStep = () => setFormStep((prev) => prev + 1);
  const backStep = () => setFormStep((prev) => prev - 1);

  const submitForm = () => {
    console.log('submit');
  };

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
