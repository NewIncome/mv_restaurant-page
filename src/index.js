import './style.scss';
import { initPageLoad, crtDOM } from './init-pg-ld.js';
import { erase, contact, menu } from './tab-pages.js';

console.log('NPM and basic setup test; log message');

initPageLoad;

link2Home.dom.addEventListener('click', function(){ 
  erase.hLine();
  initPageLoad.theHome()
});

link2Contact.dom.addEventListener('click', function(){ contact.makeContactTab() });

link2Menu.dom.addEventListener('click', function(){
  menu.init();
  // listen for clicks inside the Menu section
  let menuDays = document.querySelectorAll('.menu-a');
  menuDays.forEach(day => {
    day.addEventListener('click', function(event){
      console.log(event.target.getAttribute('data'));
      menu.days[event.target.getAttribute('data')];
    });
  });
});


// Menu option events
// link2Menu.dom.addEventListener('click', function(){ menu.init() });