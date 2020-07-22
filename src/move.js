import { crtDOM, initPageLoad } from './init-pg-ld.js';

// Module to add the movement to the cursor over the nav-links

const move = (() => {
  function zero() { line.className = 'zero'; };
  function one() { line.className = 'one'; };
  function two() { line.className = 'two'; };

  return { zero, one, two }
})();

export { move }