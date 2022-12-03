import * as React from 'react';

interface Props {
  color: 'black' | 'blue' | 'white';
}
export const Topbar: React.FC<Props> = ({color}) => {
  return (
    <div
      className={`topbar_component full-width bg-${color}`}
      style={{height: 40}}
    ></div>
  );
};
