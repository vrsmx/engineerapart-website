import * as React from 'react';

interface LayoutItem {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface Props {
  items: Array<LayoutItem>;
}
export const ThreeColumnLayout: React.FC<Props> = ({items}) => {
  return (
    <div className="column-grid mrg-top-l mrg-btm-l">
      {items.map((item) => (
        <div className="column-grid-element">
          <div className="column-grid-element-title">
            <div className="icon-container gradient-blue">{item.icon}</div>
            <h4>{item.title}</h4>
          </div>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};
