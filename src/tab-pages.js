import { crtDOM } from './init-pg-ld.js';

// === DOM code to make te inital page view ===
console.log("in 3rd file");

// ----- Module for Tabs content -----
export function contact = (() => {
  const makeContactTab = () => {
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Hungry? we\'re here for you!');
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }

  return { makeContactTab, makeMenusTab }
})();