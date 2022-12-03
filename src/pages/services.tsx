import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';
import {ThreeColumnLayout} from 'src/components/ThreeColumnLayout/ThreeColumnLayout';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {QuoteSection} from 'src/components/QuoteSection/QuoteSection';
import {Topbar} from 'src/components/Topbar/Topbar';

const layoutitems = [
  {
    title: 'Accurate search',
    content:
      'We perform an extensive search and selection process to hand-pick each candidate matching its experience and skills with your needs.',
    icon: <></>,
  },
  {
    title: 'Personalized filtering',
    content:
      'We follow a planned interview process to validate the candidate skills and experience to find the best fit.',
    icon: <></>,
  },
  {
    title: 'Permanent follow-up',
    content:
      'Weekly follow-ups and internal management with our hirees to provide constant feedback to both sides.',
    icon: <></>,
  },
];

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <main className="page">
      <Topbar color="black" />
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
                We understand shipping quality software is about problem solving
                and not code writing, a quality we look for in every member of
                our team in addition to technical and soft skills required to
                expand your existing teams or build new ones from zero.
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
      <section className="page-container mrg-top-xl mrg-btm-xl" id="expertice">
        <SectionHeader
          title={<>React experts</>}
          underlineAlign={'justify-start'}
          underlineSize={'xl'}
          underline={
            <>
              By building responsive and efficient UI's with technologies based
              on ReactJS we allow users to enjoy high quality software built
              with performance and scalability in mind.
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
                <div className="icon-container medium gradient-blue"></div>
                <h4>Product or tools, top performance and experience</h4>
              </div>
              <p>
                By leveraging the power of the React ecosystem we are able to
                build any type of web tool that your business needs: content
                management, enterprise security management or custom e-commerce
                platform.
              </p>

              <p>
                Our React experts will deliver high quality, responsive and
                efficient UIs that can be easily scaled and maintained to future
                proof your investment.
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
      <section
        className="page-container mrg-top-xl mrg-btm-xl"
        id="hiring-process"
      >
        <SectionHeader
          title={<>Cloud and mobile solutions</>}
          underlineAlign={'justify-start'}
          underlineSize={'xl'}
          underline={
            <>
              Propel your business forward with software tailored to your
              specific needs. From inventory management software to online
              booking systems.
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
                minHeight: '600px',
              }}
            ></div>
          }
          rightColumn={
            <div className="flex column" style={{gap: 100}}>
              <div className="column-grid-element">
                <div className="column-grid-element-title">
                  <div className="icon-container gradient-blue"></div>
                  <h4>Performant cloud services</h4>
                </div>
                <p>
                  Fast and reliable cloud services are key to a performant
                  infrastructure. Our engineers can assist with designing or
                  scaling performant cloud architectures to power products or
                  services on multiple cloud platforms, including AWS, Google
                  Cloud, and Azure.
                </p>
              </div>
              <div className="column-grid-element">
                <div className="column-grid-element-title">
                  <div className="icon-container gradient-blue"></div>
                  <h4>User-first apps</h4>
                </div>
                <p>
                  We realize that mobile apps are vital for keeping your
                  customers engaged and we know how to get your app stand above
                  the rest to increase your customer base and experience.
                </p>
              </div>
              <Link
                to="/services"
                className={`paragraph-link txt-blue txt-left`}
              >
                You name it, we build it →
              </Link>
            </div>
          }
        />
      </section>
      <ThreeColumnLayout items={layoutitems} />
    </main>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;
