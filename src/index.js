/* eslint-disable import/named, no-undef, no-unused-expressions */
import './style.scss';
import { initPageLoad } from './init-pg-ld';
import { erase, contact, menu } from './tab-pages';
import move from './move';

initPageLoad;

link2Home.dom.addEventListener('click', () => {
  erase.pointedElm('#headline');
  initPageLoad.theHome();
});

link2Contact.dom.addEventListener('click', () => { contact.makeContactTab(); });

link2Menu.dom.addEventListener('click', () => {
  menu.init();
  // listen for clicks inside the Menu section
  const menuDays = document.querySelectorAll('.menu-a');
  menuDays.forEach(day => {
    day.addEventListener('click', (event) => {
      menu.days[event.target.getAttribute('data')]();
    });
  });
});

nli0.dom.addEventListener('click', () => { move.zero(); });
nli1.dom.addEventListener('click', () => { move.one(); });
nli2.dom.addEventListener('click', () => { move.two(); });


// Menu option events
// link2Menu.dom.addEventListener('click', function(){ menu.init() });