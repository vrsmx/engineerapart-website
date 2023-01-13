import * as React from 'react';
import {motion} from 'framer-motion';
import {HeadFC, Link, PageProps} from 'gatsby';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {Topbar} from 'src/components/Topbar/Topbar';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {QuoteSection} from 'src/components/QuoteSection/QuoteSection';
import {ContactCtaSection} from 'src/modules/Shared/ContactCtaSection/ContactCtaSection';
import {Footer} from 'src/components/Footer/Footer';
import {LeadershipSection} from 'src/modules/AboutUs/LeadershipSection/LeadershipSection';
import {AchievementNumbers} from 'src/modules/AboutUs/AchievementNumbers/AchievementNumbers';
import {CookiePopUp} from 'src/components/CookiePopUp/CookiePopUp';
import {viewPortAnimation} from 'src/assets/animations';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page">
        <Topbar color="black" light={true} />
        <PageHeaderNavbar light={true} />
        <section className="bg-black full-width">
          <PageHeader
            title="Building teams that deliver solutions"
            underline="Building high quality and scalable solutions from its foundations is key for the success of any company."
            cta={
              <Link
                className="button primary big"
                to="/contact#schedule-a-call"
                id="story"
              >
                Build your team
              </Link>
            }
          />
        </section>
        <motion.section
          className="page-container mrg-top-xl mrg-btm-xl"
          {...viewPortAnimation}
        >
          <TwoColumnLayout
            leftSize={1}
            rightSize={1}
            leftColumn={
              <h3 className="section-header">
                Competitive solutions for competitive markets
              </h3>
            }
            rightColumn={
              <div className="flex column" style={{gap: '2em'}}>
                <p className="section-header-underline">
                  We understand the competitiveness in the current tech
                  industry, EngineerApart is dedicated to help enterprises build
                  their software solutions with reduced costs, while keeping the
                  high quality needed to build performant, scalable and
                  maintainable software.
                </p>
                <p className="section-header-underline">
                  To achieve this, having capable teams is necessary, thus we
                  search for the best engineers that match with your project and
                  need to help your teams grow, your projects scale and your
                  business to succeed.
                </p>
              </div>
            }
          />
          <AchievementNumbers />
        </motion.section>
        <section className="mrg-top-l mrg-btm-l">
          <QuoteSection>
            <motion.div
              className="page-container flex justify-end"
              {...viewPortAnimation}
            >
              <p
                className="quote-xl txt-light txt-left txt-max-width-xs"
                id="leadership"
              >
                We are proud of our work and the impact it has on our clients
              </p>
            </motion.div>
          </QuoteSection>
        </section>
        <LeadershipSection />
        <ContactCtaSection />
      </main>
      <Footer />
      <CookiePopUp />
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About us</title>;
