import './style.scss';
import { initPageLoad, crtDOM } from './init-pg-ld.js';
import { erase, contact, menu } from './tab-pages.js';

console.log('NPM and basic setup test; log message');

initPageLoad;

link2Home.dom.addEventListener('click', function(){ 
  erase.hLine();
  initPageLoad.theHome()
});

link2Menu.dom.addEventListener('click', function(){ menu.init() });

link2Contact.dom.addEventListener('click', function(){ contact.makeContactTab() });


// Menu option events
// link2Menu.dom.addEventListener('click', function(){ menu.init() });