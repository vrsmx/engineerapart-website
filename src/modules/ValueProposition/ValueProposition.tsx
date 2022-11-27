import * as React from 'react';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import * as styles from './ValueProposition.module.scss';

export const ValueProposition: React.FC = () => {
  return (
    <section
      className="page-container section-container flex column"
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
      <div className="column-grid">
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
      <p className="section-quote">
        From beautiful UIs to performant cloud services, we cover your modern
        software stack
      </p>
      <div className="flex column align-center">
        <p className="header-underline txt-center" style={{maxWidth: '620px'}}>
          At EngineerApart we are React experts that can build any web UI you
          may need, we also master the complete web stack to aid your teams in
          any position they require.
        </p>
      </div>
    </section>
  );
};
