export const viewPortAnimation = {
  transition: {duration: 0.75, type: 'linear'},
  initial: {opacity: 0, y: 50},
  whileInView: {opacity: 1, y: 0},
  viewport: {once: true},
};

export const headerAnimation = {
  transition: {duration: 0.75, type: 'linear'},
  initial: {opacity: 0, y: -50},
  whileInView: {opacity: 1, y: 0},
  viewport: {once: true},
};

export const fadeInAnimation = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0},
  transition: {duration: 0.15, type: 'linear'},
};

export const slideFromBottomAnimation = {
  initial: {y: 200, opacity: 0},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0},
  transition: {duration: 0.15, delay: 0.2, type: 'linear'},
};
