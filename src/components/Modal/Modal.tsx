import {AnimatePresence} from 'framer-motion';
import * as React from 'react';
import {createPortal} from 'react-dom';

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface ReactPortalProps {
  children: React.ReactNode;
  wrapperId?: string;
}
export const ReactPortal: React.FC<ReactPortalProps> = ({
  children,
  wrapperId = 'react-portal-wrapper',
}) => {
  const [wrapperElement, setWrapperElement] =
    React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element

      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  wrapperId?: string;
}
export const Modal: React.FC<Props> = ({children, isOpen, wrapperId}) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <ReactPortal wrapperId={wrapperId}>{children}</ReactPortal>
      ) : null}
    </AnimatePresence>
  );
};
