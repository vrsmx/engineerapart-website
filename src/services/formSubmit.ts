import {ContactFormWizardValues} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';

const DEBUG = process.env.ENV_MODE === 'staging';

const ERROR_MESSAGE =
  'We were not able to submit your message, please try again or reach to contact@engineerapart.com.';

export async function createFormSubmission(data: ContactFormWizardValues) {
  try {
    const res = await fetch(`${process.env.API_URL}/websiteContactService`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((e) => ({success: false, error: e}));
    DEBUG && console.log(res);
    return res;
  } catch (e) {
    DEBUG && console.error(e);
    return {success: false, error: ERROR_MESSAGE};
  }
}
