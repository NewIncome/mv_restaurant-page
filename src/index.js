import './style.scss';
import './init-pg-ld.js';

console.log('NPM and basic setup test; log message');

['a', 'b', 'c'].forEach((e, i) => {
  // this["let " + `var-${e}`] = 1 + 1;
  eval("let var_" + e + "=" + i);
});