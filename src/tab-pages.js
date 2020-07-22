import { crtDOM } from './init-pg-ld.js';

// ----- Module for Erase-Tab content -----
const erase = (() => {
  const elem = (e) => { e.remove() };
  const pointedElm = (tag) => {
    let domElem = document.querySelector(tag);
    erase.elem(domElem);
  };

  return { elem, pointedElm }
})();

// ----- Module for Contact-Tab content -----
const contact = (() => {
  const makeContactTab = () => {
    erase.pointedElm('#headline');
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Hungry? We\'re here for you!');
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }

  return { makeContactTab }
})();

// ----- Module for Menu-Tab content -----
const menu = (() => {
  const menuBttns = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function init() {
    erase.pointedElm('#headline');
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Here is our weekly menu:');
    window['menuUL'] = crtDOM('ul').mkChildNattribute('#headline', 'class', 'links menuLinks');
    menuBttns.forEach((day, i) => {
      window[`menuLi${i}`] = crtDOM('li');
      eval('menuLi'+ i).mkChildNattribute('.menuLinks', 'class', `n-li menu-li menuLi-${i}`);
      window['day' + day] = crtDOM('a');
      eval('day' + day).mkChildNattNtext(`.menuLi-${i}`, 'class', `n-link menu-a menu-a-${i}`, day);
      eval('day' + day).dom.setAttribute('href', '#');
      eval('day' + day).dom.setAttribute('data', i);
    });
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Please pick a day');
  };
  function Monday() {
    erase.pointedElm('.headline-p');
    const hlH3 = crtDOM('h3')
                  .mkChildNattNtext('#headline', 'class', 'headline-h', 'Monday');
    const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', `
          <li>Soup</li>
          <li>Salad</li>
          <li>Entré</li>
          <li>Dessert</li>
    `);
  }
  const days = [Monday];

  return { init, Monday, menuBttns, days }
})();

export { erase, contact, menu }