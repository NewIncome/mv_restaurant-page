/* eslint-disable no-unused-vars, no-eval  */
import { crtDOM, erase } from './init-pg-ld';

// ----- Module for Contact-Tab content -----
const contact = (() => {
  const makeContactTab = () => {
    erase.pointedElm('#headline');
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Hungry? We\'re here for you!');
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  };

  return { makeContactTab };
})();

export default contact;