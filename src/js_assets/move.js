import initPageLoad from './home';

// Module to add the movement to the cursor over the nav-links

const move = (() => {
  function zero() { initPageLoad.line.dom.className = 'zero'; }
  function one() { initPageLoad.line.dom.className = 'one'; }
  function two() { initPageLoad.line.dom.className = 'two'; }

  return { zero, one, two };
})();

export { move as default };