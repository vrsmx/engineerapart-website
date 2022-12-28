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
import {CloudServiceIcon} from 'src/assets/icons/CloudServiceIcon';
import {WebAppsIcon} from 'src/assets/icons/WebAppsIcon';
import {MobileAppsIcon} from 'src/assets/icons/MobileAppsIcon';
import {ExtendTeamIcon} from 'src/assets/icons/ExtendTeamIcon';
import {NewTeamIcon} from 'src/assets/icons/NewTeamIcon';
import {ScaleIcon} from 'src/assets/icons/ScaleIcon.tsx';

interface GetSteps {
  updateList: ListUpdate;
  update: UpdateContactFormWizard;
  onSubmit: () => void;
  isValid: () => boolean;
  data: ContactFormWizardValues;
  isSent: boolean;
}
const getSteps = ({
  updateList,
  update,
  onSubmit,
  isValid,
  data,
  isSent,
}: GetSteps) => [
  <ContactFormWizardCardsStep
    options={[
      {
        id: 'cloud-services',
        icon: <CloudServiceIcon className="icon-blue" styles={{width: 75}} />,
        label: 'Cloud services',
      },
      {
        id: 'web-apps',
        icon: <WebAppsIcon className="icon-blue" styles={{width: 65}} />,
        label: 'Web Apps',
      },
      {
        id: 'mobile-apps',
        icon: <MobileAppsIcon className="icon-blue" styles={{width: 35}} />,
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
        icon: (
          <ExtendTeamIcon
            className="icon-blue"
            styles={{width: 55, height: 55}}
          />
        ),
        label: 'Grow a team',
      },
      {
        id: 'hire-team',
        icon: (
          <NewTeamIcon className="icon-blue" styles={{width: 55, height: 55}} />
        ),
        label: 'Hire a team',
      },
      {
        id: 'both',
        icon: (
          <ScaleIcon className="icon-blue" styles={{width: 55, height: 55}} />
        ),
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
    isValid={isValid}
  />,
];

export const ContactFormWizard = () => {
  const [formStep, setFormStep] = React.useState<number>(0);
  const {data, updateList, update, onSubmit, isValid, loading, error, isSent} =
    useContactFormWizard();

  const nextStep = () => setFormStep((prev) => prev + 1);
  const backStep = () => setFormStep((prev) => prev - 1);

  const steps = getSteps({updateList, update, onSubmit, isValid, data, isSent});

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
