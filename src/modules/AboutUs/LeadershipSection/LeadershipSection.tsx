import * as React from 'react';
import {motion} from 'framer-motion';
import * as styles from './LeadershipSection.module.scss';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {StaticImage} from 'gatsby-plugin-image';
import {viewPortAnimation} from 'src/assets/animations';

export const LeadershipSection: React.FC = () => {
  return (
    <motion.section className="page-container flex column">
      <TwoColumnLayout
        alignItems="start"
        leftSize={2}
        rightSize={3}
        leftColumn={
          <motion.h3 className="section-header" {...viewPortAnimation}>
            Leaders
          </motion.h3>
        }
        rightColumn={
          <motion.h4
            className="section-header-underline"
            {...viewPortAnimation}
          >
            Our engineering team is led by experienced principal level engineers
            who have previously worked at some of the world's largest tech
            companies.
          </motion.h4>
        }
      />
      <ul className="mrg-btm-xl">
        <motion.li className="flex column mrg-btm-m" {...viewPortAnimation}>
          <h4 className={`${styles.leader_title} mrg-btm-xs`}>Patrick Sears</h4>
          <TwoColumnLayout
            className=""
            alignItems="center"
            leftSize={2}
            rightSize={3}
            leftColumn={
              <div className={styles.leader_image_container}>
                <div className="bg-gray">
                  <StaticImage
                    src={'../../../images/patrick-sears.jpeg'}
                    alt="EngineerApart Logo"
                    transformOptions={{
                      cropFocus: 'attention',
                      grayscale: true,
                    }}
                    placeholder="blurred"
                    aspectRatio={208 / 209}
                    width={258}
                  />
                </div>
              </div>
            }
            rightColumn={
              <div className="flex column">
                <p className=" mrg-btm-xs">
                  Patrick Sears started his career at Microsoft where he helped
                  launch the Bing search engine. He subsequently moved to Amazon
                  where he managed a team that delivered Amazon Video. Deciding
                  to move to Mexico.
                </p>
                <p>
                  Patrick worked as a consultant for WizeLine, leading
                  development for News Corp's realtor.com. Patrick then decided
                  to take the "entrepreneurial plunge" and started Engineer
                  apart to leverage his extensive experience in building teams
                  for specialized software development.
                </p>
              </div>
            }
          />
        </motion.li>
        <motion.li className="flex column" {...viewPortAnimation}>
          <h4 className={`${styles.leader_title} mrg-btm-xs`}>Barry Steyn</h4>
          <TwoColumnLayout
            className=""
            alignItems="center"
            leftSize={2}
            rightSize={3}
            leftColumn={
              <div className={styles.leader_image_container}>
                <div className="bg-gray">
                  <StaticImage
                    src={'../../../images/barry-steyn.jpeg'}
                    alt="EngineerApart Logo"
                    transformOptions={{
                      cropFocus: 'attention',
                      grayscale: true,
                    }}
                    placeholder="blurred"
                    aspectRatio={208 / 209}
                    width={258}
                  />
                </div>
              </div>
            }
            rightColumn={
              <div className="flex column">
                <p className=" mrg-btm-xs">
                  Barry Steyn has worked at both startups and large enterprises.
                  After working at Microsoft as lead developer on storage
                  synchronization for OneNote app, Barry moved to Silicon Valley
                  where he became a lead engineer for realtor.com. He
                  subsequently moved to LinkedIn where he managed a team that
                  produced specialized infrastructure for adverts.
                </p>
                <p>
                  Barry then decided to join Patrick at EngineerApart, bringing
                  his experience of people management and team building with
                  him.
                </p>
              </div>
            }
          />
        </motion.li>
      </ul>
    </motion.section>
  );
};
