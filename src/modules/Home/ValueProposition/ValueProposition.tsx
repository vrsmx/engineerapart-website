import * as React from 'react';
import {Link} from 'gatsby';
import {motion} from 'framer-motion';
import {viewPortAnimation} from 'src/assets/animations';
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
      'Bootstrap projects with experts who are aligned to your needs, goals and constraints.',
    icon: <StartIcon className="icon-blue" styles={{width: 50, top: 0}} />,
  },
  {
    title: 'Scale',
    content:
      'Integrate individual contributors or full teams to scale the software building process.',
    icon: <ScaleIcon className="icon-blue" styles={{width: 45}} />,
  },
  {
    title: 'Accelerate',
    content:
      'Utilize the specialized skills of our team to deliver quality solutions within large scale projects.',
    icon: <AccelerateIcon className="icon-blue" styles={{width: 60}} />,
  },
];

export const ValueProposition: React.FC = () => {
  return (
    <motion.section
      className="page-container flex column"
      {...viewPortAnimation}
      id="value-proposition"
    >
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
          We are React experts that can build any web UI you may need that also
          master the complete web stack to aid your teams in any position they
          require.
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
    </motion.section>
  );
};
