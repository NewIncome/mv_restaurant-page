import { crtDOM } from './init-pg-ld.js';

// ----- Module for Erase-Tab content -----
const erase = (() => {
  const elem = (e) => { e.remove() };
  const hLine = () => {
    let domElem = document.querySelector('#headline');
    erase.elem(domElem);
  };

  return { elem, hLine }
})();

// ----- Module for Contact-Tab content -----
const contact = (() => {
  const makeContactTab = () => {
    erase.hLine();
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Hungry? we\'re here for you!');
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }

  return { makeContactTab }
})();

// ----- Module for Menu-Tab content -----
const menu = (() => {

})();

export { erase, contact }