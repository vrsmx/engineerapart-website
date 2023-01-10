import * as React from 'react';
import {motion} from 'framer-motion';
import {HeadFC, Link, PageProps} from 'gatsby';
import {ThreeColumnLayout} from 'src/components/ThreeColumnLayout/ThreeColumnLayout';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {QuoteSection} from 'src/components/QuoteSection/QuoteSection';
import {Topbar} from 'src/components/Topbar/Topbar';
import {TeamBuildingCards} from 'src/modules/Services/TeamBuildingCards/TeamBuildingCards';
import {ContactCtaSection} from 'src/modules/Shared/ContactCtaSection/ContactCtaSection';
import {Footer} from 'src/components/Footer/Footer';
import {CloudAndMobileSolutions} from 'src/modules/Services/CloudAndMobileSolutions/CloudAndMobileSolutions';
import {AccurateSearchIcon} from 'src/assets/icons/AccurateSearchIcon';
import {PersonalizedSearchIcon} from 'src/assets/icons/PersonalizedSearchIcon';
import {FollowUpIcon} from 'src/assets/icons/FollowUpIcon';
import {ServicesResults} from 'src/modules/Services/Results/Results';
import {ReactExpertice} from 'src/modules/Services/ReactExpertice/ReactExpertice';
import {CookiePopUp} from 'src/components/CookiePopUp/CookiePopUp';
import {viewPortAnimation} from 'src/assets/animations';

const layoutitems = [
  {
    title: 'Accurate search',
    content:
      'We perform an extensive search and selection process to hand-pick each candidate matching its experience and skills with your needs.',
    icon: (
      <AccurateSearchIcon
        className="icon-blue"
        styles={{width: 50, top: -4, left: 5}}
      />
    ),
  },
  {
    title: 'Personalized filtering',
    content:
      'We follow a planned interview process to validate the candidate skills and experience to find the best fit.',
    icon: (
      <PersonalizedSearchIcon
        className="icon-blue"
        styles={{width: 45, left: -2, top: -2}}
      />
    ),
  },
  {
    title: 'Permanent follow-up',
    content:
      'Weekly follow-ups and internal management with our hirees to provide constant feedback to both sides.',
    icon: <FollowUpIcon className="icon-blue" styles={{width: 45}} />,
  },
];

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page">
        <Topbar color="black" light={true} />
        <PageHeaderNavbar light={true} />
        <section className="bg-black full-width">
          <PageHeader
            title="You give the problem, we deliver the solution"
            underline="Engineering is about understanding the problem at its core and finding the most efficient solution"
            cta={
              <Link className="button primary big" to="/contact">
                Get your solution
              </Link>
            }
          />
        </section>
        <motion.section
          className="page-container mrg-top-xl mrg-btm-xl"
          {...viewPortAnimation}
        >
          <ServicesResults />
        </motion.section>
        <motion.section
          className="page-container mrg-top-xl mrg-btm-xl"
          id="expertice"
          {...viewPortAnimation}
        >
          <ReactExpertice />
        </motion.section>
        <QuoteSection>
          <motion.div
            className="page-container flex column align-end"
            {...viewPortAnimation}
          >
            <p className="quote-l txt-light txt-max-width-m">
              Our React experts will deliver high quality, responsive and
              efficient UIs that can be easily scaled and mantained to future
              proof your investment.
            </p>
          </motion.div>
        </QuoteSection>
        <CloudAndMobileSolutions />
        <motion.section
          className="page-container flex column align-center"
          {...viewPortAnimation}
        >
          <h3 className="section-header txt-center txt-max-width-s">
            Grow and build your teams
          </h3>
          <ThreeColumnLayout items={layoutitems} />
          <TeamBuildingCards />
        </motion.section>
        <ContactCtaSection />
      </main>
      <Footer />
      <CookiePopUp />
    </>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;
