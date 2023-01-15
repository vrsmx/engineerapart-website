import {ContactFormWizardValues} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';

const DEBUG = process.env.ENV_MODE === 'staging';

const ERROR_MESSAGE =
  'We were not able to submit your message, please try again or reach to sales@engineerapart.com.';

export async function createFormSubmission(data: ContactFormWizardValues) {
  try {
    const res = await fetch(`${process.env.API_URL}websiteContactService`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        services: data.services.toString(),
        hireMethod: data.hireMethod.toString(),
      }),
    })
      .then((res) => res.json())
      .catch((e) => ({success: false, error: e}));

    DEBUG && (res.error ? console.error(res) : console.log(res));

    return {success: res.success, error: res.error ? ERROR_MESSAGE : null};
  } catch (e) {
    DEBUG && console.error(e);
    return {success: false, error: ERROR_MESSAGE};
  }
}
