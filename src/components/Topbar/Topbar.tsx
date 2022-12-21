import * as React from 'react';
import * as styles from './Topbar.module.scss';

interface Props {
  color: 'black' | 'blue' | 'white';
  light?: boolean;
}
export const Topbar: React.FC<Props> = ({color, light = false}) => {
  return (
    <div
      className={`${styles.topbar_component}  ${
        light ? 'bg-black' : 'bg-white'
      }`}
    >
      <div
        className={`topbar_component full-width bg-${color}`}
        style={{height: 40}}
      ></div>
    </div>
  );
};
