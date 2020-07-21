// import './style.scss';
// import { initPageLoad, crtDOM } from './init-pg-ld.js';
// import { erase, contact } from './tab-pages.js';

console.log('NPM and basic setup test; log message');

initPageLoad;

console.log(initPageLoad.vars);

link2Home.dom.addEventListener('click', function() { console.log('clicked home') });

link2Contact.dom.addEventListener('click', function() { console.log('clicked contact') });

link2Menu.dom.addEventListener('click', function() {
  erase.element('.links')
  console.log('clicked menu')
});

// link2Home.dom.addEventListener('click', home());

// link2Contact.dom.addEventListener('click', contact());

// link2Menu.dom.addEventListener('click', menu());



// Dynamic variable, making
// ['a', 'b', 'c'].forEach((e, i) => {
//   // eval(`let n${e}` + '=' + i);
//   window['n' + e] = i;
//   console.log(eval('n'+e));
// });
// console.log(na, nb, nc);

// document.querySelector().addEventListener