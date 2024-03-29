import * as React from 'react';
import {ProductOrToolIcon} from 'src/assets/icons/ProductOrToolIcon';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {ProductAnimation} from './ProductAnimation';

export const ReactExpertice: React.FC = () => {
  return (
    <>
      <SectionHeader
        title={<>React experts</>}
        underlineAlign={'justify-start'}
        underlineSize={'xl'}
        underline={
          <>
            By building responsive and efficient UI's with technologies based on
            ReactJS we allow users to enjoy high quality software built with
            performance and scalability in mind.
          </>
        }
      />
      <TwoColumnLayout
        leftSize={4}
        rightSize={3}
        leftColumn={
          <div className="image-body flex justify-center align-center column gradient-blue-turquioise">
            <ProductAnimation />
          </div>
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
              management, enterprise security management or custom e-commerce
              platform.
            </p>
          </div>
        }
      />
    </>
  );
};
