import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {Topbar} from 'src/components/Topbar/Topbar';
import {Footer} from 'src/components/Footer/Footer';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {Calendar} from 'src/modules/Contact/Calendar/Calendar';
import {ContactForm} from 'src/modules/Shared/ContactForm/ContactForm';
import {ContactLinks} from 'src/modules/Contact/ContactLinks/ContactLinks';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page">
        <Topbar color="black" light={true} />
        <PageHeaderNavbar light={true} />
        <section className="bg-black full-width">
          <PageHeader
            title="Our team of experts are ready to help"
            underline="Doesn’t matter the problem, If it’s software we can help you."
            cta={
              <Link className="button primary big" to="/contact">
                Call the experts
              </Link>
            }
          />
        </section>
        <section className="page-container mrg-top-xl mrg-btm-l">
          <TwoColumnLayout
            leftSize={5}
            rightSize={3}
            leftColumn={
              <h3 className="section-header">
                Meet the experts and grow your teams
              </h3>
            }
            rightColumn={
              <div className="flex column align-start" style={{gap: '2em'}}>
                <h4 className="section-header-underline">
                  We are happy and ready to aid you build your teams of
                  qualified engineers. Doesn't matter the size or stack
                </h4>
                <button className="button primary">Schedule a call</button>
              </div>
            }
          />
        </section>
        <section className="page-container pdg-btm-xl">
          <Calendar />
        </section>
        <section className="page-container mrg-top-xl mrg-btm-xl">
          <TwoColumnLayout
            alignItems="start"
            leftColumn={
              <div className="flex column">
                <h3 className="section-header mrg-btm-xs">
                  Or leave a message
                </h3>
                <h4 className="section-header-underline  mrg-btm-s">
                  We will reach out to you to discuss in more detail how we can
                  help you build or grow your software development teams.
                </h4>
                <ContactLinks />
              </div>
            }
            rightColumn={<ContactForm />}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact Page</title>;
