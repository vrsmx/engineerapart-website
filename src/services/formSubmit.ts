import AWS from 'aws-sdk';
import {ContactFormWizardValues} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard.types';

const ERROR_MESSAGE =
  'We were not able to submit your message, please try again or reach to contact@engineerapart.com.';

const htmlTemplate = (data: ContactFormWizardValues) => {
  return `
    <h3><strong>NEW CONTACT ENTRY - ${data.name} ${data.lastname}</strong></h3>
    <p><strong>Name:</strong> ${data.name} ${data.lastname}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${
    data.email
  }</a></p>
    <h3><strong>Interests form details</strong></h3>
    <p><strong>Services:</strong> ${data.hireMethod.toString()}</p>
    <p><strong>Hire method:</strong> ${data.services.toString()}</p>
  `;
};

function getSesParams(sender: string, receivers: string[], data: any) {
  const params = {
    Destination: {
      ToAddresses: receivers,
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'EngineerApart Webstite - New Contact Submission',
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: htmlTemplate(data),
        },
      },
    },
    Source: sender,
  };

  return params;
}

export async function createFormSubmission(data: ContactFormWizardValues) {
  try {
    AWS.config.update({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const params = getSesParams('noreply@vrs.mx', ['noreply@vrs.mx'], data);

    const sendPromise = new AWS.SES().sendEmail(params).promise();

    return sendPromise
      .then((data) => ({success: true, error: null}))
      .catch((e) => {
        console.error(e);
        return {
          success: false,
          error: ERROR_MESSAGE,
        };
      });
  } catch (e) {
    console.error(e);
    return {success: false, error: ERROR_MESSAGE};
  }
}
