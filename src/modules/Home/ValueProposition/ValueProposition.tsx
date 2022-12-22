import {Link} from 'gatsby';
import * as React from 'react';
import {AccelerateIcon} from 'src/assets/icons/AccelerateIcon';
import {ScaleIcon} from 'src/assets/icons/ScaleIcon.tsx';
import {StartIcon} from 'src/assets/icons/StartIcon';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {ThreeColumnLayout} from 'src/components/ThreeColumnLayout/ThreeColumnLayout';
import {ServicesCardsContainer} from '../ServicesCardsContainer/ServicesCardsContainer';
import * as styles from './ValueProposition.module.scss';

const layoutitems = [
  {
    title: 'Start',
    content:
      'Bootstrap new projects within your company with hand-picked experts aligned with the project needs, goals and constraints.',
    icon: <StartIcon className="icon-blue" styles={{width: 50, top: 0}} />,
  },
  {
    title: 'Scale',
    content:
      'Integrate individual contributors or full teams to upscale the output and speed of software building process.',
    icon: <ScaleIcon className="icon-blue" styles={{width: 45}} />,
  },
  {
    title: 'Accelerate',
    content:
      'Use the specialized skill set of our teams to deliver high quality, maintainable and scalable solutions within large scale projects.',
    icon: <AccelerateIcon className="icon-blue" styles={{width: 60}} />,
  },
];

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
      <ThreeColumnLayout items={layoutitems} />
      <p className="section-quote mrg-btm-m">
        From beautiful UIs to performant cloud services, we cover your modern
        software stack
      </p>
      <div className="flex column align-center">
        <p
          className={`${styles.services_headline} section-header-underline txt-center mrg-btm-xs`}
        >
          At EngineerApart we are React experts that can build any web UI you
          may need, we also master the complete web stack to aid your teams in
          any position they require.
        </p>
        <ServicesCardsContainer />
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
