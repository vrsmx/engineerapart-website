import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';
import {ThreeColumnLayout} from 'src/components/ThreeColumnLayout/ThreeColumnLayout';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {QuoteSection} from 'src/components/QuoteSection/QuoteSection';
import {Topbar} from 'src/components/Topbar/Topbar';
import {TeamBuildingCards} from 'src/modules/Services/TeamBuildingCards/TeamBuildingCards';
import {ContactCtaSection} from 'src/modules/Shared/ContactCtaSection/ContactCtaSection';
import {Footer} from 'src/components/Footer/Footer';
import {CloudAndMobileSolutions} from 'src/modules/Services/CloudAndMobileSolutions/CloudAndMobileSolutions';
import {ProductOrToolIcon} from 'src/assets/icons/ProductOrToolIcon';
import {AccurateSearchIcon} from 'src/assets/icons/AccurateSearchIcon';
import {PersonalizedSearchIcon} from 'src/assets/icons/PersonalizedSearchIcon';
import {FollowUpIcon} from 'src/assets/icons/FollowUpIcon';

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
        <section className="page-container mrg-top-xl mrg-btm-xl">
          <TwoColumnLayout
            leftSize={1}
            rightSize={1}
            leftColumn={
              <div className="flex column" style={{gap: 50}}>
                <h3 className="section-header">
                  Discover how we achieve our results
                </h3>
                <p>
                  We understand shipping quality software is about problem
                  solving and not code writing, a quality we look for in every
                  member of our team in addition to technical and soft skills
                  required to expand your existing teams or build new ones from
                  zero.
                </p>
                <Link
                  to="/services"
                  className={`paragraph-link txt-blue txt-left`}
                >
                  Learn more on how we build teams →
                </Link>
              </div>
            }
            rightColumn={
              <div
                className="image-body flex column gradient-blue-turquioise"
                style={{
                  minWidth: '300px',
                  minHeight: '500px',
                }}
              ></div>
            }
          />
        </section>
        <section
          className="page-container mrg-top-xl mrg-btm-xl"
          id="expertice"
        >
          <SectionHeader
            title={<>React experts</>}
            underlineAlign={'justify-start'}
            underlineSize={'xl'}
            underline={
              <>
                By building responsive and efficient UI's with technologies
                based on ReactJS we allow users to enjoy high quality software
                built with performance and scalability in mind.
              </>
            }
          />
          <TwoColumnLayout
            leftSize={4}
            rightSize={3}
            leftColumn={
              <div
                className="image-body flex column gradient-blue-turquioise"
                style={{
                  minWidth: '300px',
                  minHeight: '500px',
                }}
              ></div>
            }
            rightColumn={
              <div className="column-grid-element">
                <div className="column-grid-element-title">
                  <div className="icon-container medium gradient-blue">
                    <ProductOrToolIcon
                      className="icon-blue"
                      styles={{width: 55, height: 55}}
                    />
                  </div>
                  <h4>Product or tools, top performance and experience</h4>
                </div>
                <p>
                  By leveraging the power of the React ecosystem we are able to
                  build any type of web tool that your business needs: content
                  management, enterprise security management or custom
                  e-commerce platform.
                </p>

                <p>
                  Our React experts will deliver high quality, responsive and
                  efficient UIs that can be easily scaled and maintained to
                  future proof your investment.
                </p>
              </div>
            }
          />
        </section>
        <QuoteSection>
          <div className="page-container flex column align-end">
            <p className="quote-l txt-light txt-max-width-m">
              Our React experts will deliver high quality, responsive and
              efficient UIs that can be easily scaled and mantained to future
              proof your investment.
            </p>
          </div>
        </QuoteSection>
        <CloudAndMobileSolutions />
        <section className="page-container flex column align-center">
          <h3 className="section-header txt-center txt-max-width-s">
            Grow and build your teams
          </h3>
          <ThreeColumnLayout items={layoutitems} />
          <TeamBuildingCards />
        </section>
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;
