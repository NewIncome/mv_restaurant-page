import './style.scss';
import { initPageLoad, crtDOM } from './init-pg-ld.js';

console.log('NPM and basic setup test; log message');

initPageLoad();

// Dynamic variable, making
// ['a', 'b', 'c'].forEach((e, i) => {
//   // eval(`let n${e}` + '=' + i);
//   window['n' + e] = i;
//   console.log(eval('n'+e));
// });
// console.log(na, nb, nc);

// document.querySelector().addEventListener