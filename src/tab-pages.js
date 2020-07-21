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
  function init() {
    erase.hLine();
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Here is our weekly menu:');
    const menuUL = crtDOM('ul').mkChildNattribute('#headline', 'class', 'links menuLinks');
    const menuBttns = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    menuBttns.forEach((day, i) => {
      window[`menuLi${i}`] = crtDOM('li');
      eval('menuLi'+ i).mkChildNattribute('.menuLinks', 'class', `n-li menu-li menuLi-${i}`);
      window['day' + day] = crtDOM('a');
      eval('day' + day).mkChildNattNtext(`.menuLi-${i}`, 'class', `n-link menu-a-${i}`, day);
      eval('day' + day).dom.setAttribute('href', '#');
    });
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Please pick a day');
  };
  function monday() {
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2')
                  .mkChildNattNtext('#headline', 'class', 'headline-h', 'Monday');
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', `
          <li>Soup</li>
          <li>Salad</li>
          <li>Entré</li>
          <li>Dessert</li>
    `);
  }

  return { init, monday }
})();

export { erase, contact, menu }