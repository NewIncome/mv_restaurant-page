// import { crtDOM } from './init-pg-ld.js';

// === DOM code to make te inital page view ===
console.log("in 3rd file");

// ----- Module for Erase-Tab content -----
const erase = (() => {
  // function elem(e){document.querySelector(`${e}`)}; // UNKNOWN ISSUE !!!
  const htmlElem = (e) => { e.remove() };

  return { htmlElem }
})();

// ----- Module for Contact-Tab content -----
const contact = (() => {
  erase.htmlElem(initPageLoad.vars[3].dom);
  const makeContactTab = () => {
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Hungry? we\'re here for you!');
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }

  return { makeContactTab }
})();

// export { erase, contact }
