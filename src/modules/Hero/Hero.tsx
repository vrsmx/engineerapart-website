import * as React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      className="hero-section page-container flex column align-center"
      style={{gap: '75px', padding: '100px 0'}}
    >
      <h1 className="txt-center txt-dark">
        Start <br />
        Scale
        <br />
        <span className="txt-blue">Accelerate</span>
      </h1>
      <div className="flex column align-center" style={{gap: '35px'}}>
        <h2 className="txt-center txt-max-width-s">
          Build or grow your software development teams with cost-effective
          expert engineers specialized in product driven development engineers
          engineers
        </h2>
        <div className="flex justify-center">
          <button className="button primary">Get started</button>
          <button className="button clear">Learn more</button>
        </div>
      </div>
    </section>
  );
};
