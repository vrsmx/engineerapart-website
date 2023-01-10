export const viewPortAnimation = {
  transition: {duration: 0.75, type: 'linear'},
  initial: {opacity: 0, y: 50},
  whileInView: {opacity: 1, y: 0},
  viewport: {once: true},
};

export const fadeInAnimation = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0},
  transition: {duration: 0.15, type: 'linear'},
};

export const headerAnimation = {
  transition: {duration: 0.75, type: 'linear'},
  initial: {opacity: 0, y: -50},
  whileInView: {opacity: 1, y: 0},
  viewport: {once: true},
};

export const slideFromRightAnimation = {
  initial: {x: 400, opacity: 0},
  animate: {x: 0, opacity: 1},
  exit: {x: 400, opacity: 0},
  transition: {duration: 0.25, type: 'linear'},
};

export const slideFromBottomAnimation = {
  initial: {y: 400},
  animate: {y: 0},
  exit: {y: 400},
  transition: {duration: 0.25, type: 'linear'},
};
