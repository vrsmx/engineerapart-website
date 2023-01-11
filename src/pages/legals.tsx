import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';
import {Footer} from 'src/components/Footer/Footer';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {Topbar} from 'src/components/Topbar/Topbar';
import {CookiePopUp} from 'src/components/CookiePopUp/CookiePopUp';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const config = {
  name: 'EngineerApart',
  short: 'EngineerApart',
  address: '1301 Oak Lake Court, San Jose, 95131',
  domain: 'engineerapart.com',
  realURL: 'www.engineerapart.com',
};

const LegalsPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page">
        <Topbar color="black" light={true} />
        <PageHeaderNavbar light={true} />
        <section className="bg-black full-width mrg-btm-xl">
          <PageHeader
            title="Legals"
            underline="Information about our privacy and terms of use"
          />
        </section>
        <section className="page-container flex column txt-max-width-xl mrg-btm-xl">
          <p className="paragraph">
            <strong>{config.name}</strong>, with address in {config.address},
            recognizes the importance of a legitimate, controlled, and informed
            treatment of the personal data of its visitors and users of our
            website denominated {config.domain}, and puts at your disposal the
            present Privacy Statement, in order for you to know its practices
            when obtaining, using, saving, and in general, handling your
            personal information in accordance with the Federal Law of Personal
            Data Protection in Possession of Particulars or Ley Federal de
            Protección de Datos Personales en Posesión de los Particulares
            (henceforth the “Law”).
          </p>
          <h4 className="mrg-btm-xxs mrg-top-s">1. Collected Personal Data</h4>
          <p className="paragraph">
            You can browse through our website without providing personal
            information; however, there are certain sections inside it where you
            may voluntarily provide your information. Your information can be
            collected in different situations, for example, when you request
            information of the services provided by{' '}
            <strong>{config.short}</strong>, as well as those you provide with
            the goal of establishing a legal relationship, meaning, when you
            decide to hire our services and the use of our software and mobile
            application.
          </p>
          <h4 className="mrg-btm-xxs mrg-top-s">
            2. Purpose and/or Use of Personal Data
          </h4>
          <p className="paragraph">
            We may use your personal data (such as full name, gender, contact
            telephone numbers, e-mail, date of birth, full address) for
            different purposes, depending on the particular circumstances in
            which they are collected, always in obedience to the relationship we
            have with you and the specific privacy statement that, in your case,
            has been made available to you. Or, when you visit our facilities to
            know our services, the use of software, to answer your questions and
            comments, establish a legal relationship, to stay in contact with
            you, and to send you commercial and relevant information.
          </p>
          <h4 className="mrg-btm-xxs mrg-top-s">
            3. Use of Tracking Technologies
          </h4>
          <p className="paragraph">
            When you browse our website, certain non-personal data is collected
            through “cookies” and from “web beacons”. The collection of this
            information takes place simply with the use and interaction with our
            website and the collected information may consist of Internet
            Protocol addresses, operating system, type of browser, information
            about your location (provided by mobile devices), and the route
            taken during the time you are in our website. This information is
            collected only with the following purposes: to generate statistics
            related to the visits to our website, the time spent at the website,
            and the sites of reference that may had led you to ours.
            <br />
            <br />
            This information is also used to maintain and update user profiles
            and to adapt and personalize information provided here. It is
            possible to disable these tracking technologies in all types of
            browsers; however, in order to specify, here are the steps to follow
            to disable them in Google Chrome: Go to the “Tools” menu; click on
            “erase browsing information”, select option “delete cookies” and
            other information from sites and complements, click on “accept”.
            When disabling or blocking these mechanisms our website may not work
            correctly. To learn more about the subject, refer to{' '}
            <a href="https://www.allaboutcookies.org/">
              https://www.allaboutcookies.org/
            </a>
            .
          </p>
          <h4 className="mrg-btm-xxs mrg-top-s">
            4. Transfer of Personal Data
          </h4>
          <p className="paragraph">
            <strong>{config.short}</strong> may transfer your personal data to a
            third party with whom it has a legal relationship, only to comply
            with the purposes described in the Privacy Statement.{' '}
            <strong>{config.short}</strong> may also transfer your personal data
            in the specific cases prescribed by Law.
          </p>
          <h4 className="mrg-btm-xxs mrg-top-s">5. Security Measures</h4>
          <p className="paragraph">
            <strong>{config.short}</strong> has adopted and maintains necessary
            security, administrative, technical, and physical measures at your
            reach in order to protect personal data against damage, loss,
            alteration, destruction, or the unauthorized use, access, or
            handling.
          </p>
          <h4 className="mrg-btm-xxs mrg-top-s">
            6. Rights with Respect to your Personal Data
          </h4>
          <p className="paragraph">
            As holder of personal data, you may exercise before the individual
            Responsible of Personal Data at <strong>{config.short}</strong>, the
            rights to access, correct, cancel, and oppose (“ARCO” rights). At
            the same time, you may revoke at any time, consent you may have
            given that may have been necessary for the handling of your data, as
            well as limit the use or disclosure of it. This, may be done through
            a request in the established terms by the Law to the e-mail address:
            info@{config.domain}, or the address specified in the first
            paragraph of the present Privacy Statement.
          </p>
          <h4 className="mrg-btm-xxs mrg-top-s">
            7. Acceptance of the Terms of Use
          </h4>
          <p className="paragraph">
            This confidentiality statement is subject to the Terms of Use of{' '}
            <a href={config.realURL}>{config.domain}</a>, which constitutes a
            legal agreement between the visitor and user of the website. The use
            of the website means you have read, understood, and agreed to the
            conditions mentioned above.
          </p>
        </section>
      </main>
      <Footer />
      <CookiePopUp />
    </>
  );
};

export default LegalsPage;

export const Head: HeadFC = () => <title>Legals Page</title>;
