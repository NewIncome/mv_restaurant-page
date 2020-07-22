import { initPageLoad } from './init-pg-ld';

// Module to add the movement to the cursor over the nav-links

const move = (() => {
  function zero() { initPageLoad.line.className = 'zero'; }
  function one() { initPageLoad.line.className = 'one'; }
  function two() { initPageLoad.line.className = 'two'; }

  return { zero, one, two };
})();

export { move as default };