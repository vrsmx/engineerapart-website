import {Link} from 'gatsby';
import * as React from 'react';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import * as styles from './ValueProposition.module.scss';

export const ValueProposition: React.FC = () => {
  return (
    <section className="page-container flex column" id="value-proposition">
      <SectionHeader
        title={<>Minimum effort, maximum returns</>}
        underline={
          <>
            Hire top-talent engineers dedicated to develop high quality software
            products or services
          </>
        }
      />
      <div className="column-grid mrg-top-l mrg-btm-xl">
        <div className="column-grid-element">
          <div className="column-grid-element-title">
            <div className="icon-container gradient-blue"></div>
            <h4>Start</h4>
          </div>
          <p>
            Bootstrap new projects within your company with hand-picked experts
            aligned with the project needs, goals and constraints.
          </p>
        </div>
        <div className="column-grid-element">
          <div className="column-grid-element-title">
            <div className="icon-container gradient-blue"></div>
            <h4>Scale</h4>
          </div>
          <p>
            Integrate individual contributors or full teams to upscale the
            output and speed of software building process.
          </p>
        </div>
        <div className="column-grid-element">
          <div className="column-grid-element-title">
            <div className="icon-container gradient-blue"></div>
            <h4>Accelerate</h4>
          </div>
          <p>
            Use the specialized skill set of our teams to deliver high quality,
            maintainable and scalable solutions within large scale projects.
          </p>
        </div>
      </div>
      <p className="section-quote mrg-btm-m">
        From beautiful UIs to performant cloud services, we cover your modern
        software stack
      </p>
      <div className="flex column align-center">
        <p
          className={`${styles.services_headline} header-underline txt-center mrg-btm-xs`}
        >
          At EngineerApart we are React experts that can build any web UI you
          may need, we also master the complete web stack to aid your teams in
          any position they require.
        </p>
        <div
          className={`${styles.cards_container} mrg-btm-m full-width gradient-blue-turquioise flex justify-center pdg-top-xs pdg-btm-xs round-corner-primary`}
        >
          <div
            className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
          >
            <div className="icon-container large gradient-blue mrg-btm-xs"></div>
            <h4 className="txt-blue">Cloud Services</h4>
            <p className="txt-center">
              Full cloud ecosystems in AWS, Azure or G-Cloud
            </p>
          </div>
          <div
            className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
          >
            <div className="icon-container large gradient-blue mrg-btm-xs"></div>
            <h4 className="txt-blue">Web Apps</h4>
            <p className="txt-center">Efficient UIs in any framework</p>
          </div>
          <div
            className={`${styles.card} bg-white flex column align-center round-corner-secondary `}
          >
            <div className="icon-container large gradient-blue mrg-btm-xs"></div>
            <h4 className="txt-blue">Mobile Apps</h4>
            <p className="txt-center">Native solutions for Android or IOS</p>
          </div>
        </div>
        <div className="flex justify-end full-width">
          <Link to="/services" className={`section-link txt-blue txt-right`}>
            Discover everything EngineerApart
            <br />
            can do for your business →
          </Link>
        </div>
      </div>
    </section>
  );
};
