import * as React from 'react';
import {motion} from 'framer-motion';
import {viewPortAnimation} from 'src/assets/animations';
import * as styles from './PageHeader.module.scss';

interface Props {
  title: string;
  underline: string;
  cta?: React.ReactNode;
}
export const PageHeader: React.FC<Props> = ({title, underline, cta}) => {
  return (
    <div
      className={`${styles.page_header_component} page-container flex column pdg-top-l pdg-btm-l txt-light`}
    >
      <motion.h1
        className="txt-left txt-max-width-xl mrg-btm-xxs"
        {...viewPortAnimation}
      >
        {title}
      </motion.h1>
      <motion.h2
        className="page-header-underline txt-left txt-max-width-xs mrg-btm-xxs"
        {...viewPortAnimation}
      >
        {underline}
      </motion.h2>
      <motion.div className="flex" {...viewPortAnimation}>
        {cta}
      </motion.div>
    </div>
  );
};
