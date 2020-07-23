/* eslint-disable no-unused-vars, no-eval  */
import { crtDOM, erase } from './init-pg-ld';

// ----- Module for Menu-Tab content -----
const menu = (() => {
  const menuBttns = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function init() {
    erase.pointedElm('#headline');
    const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'Here is our weekly menu:');
    const menuUL = crtDOM('ul').mkChildNattribute('#headline', 'class', 'links menuLinks');
    menuBttns.forEach((day, i) => {
      window[`menuLi${i}`] = crtDOM('li');
      eval(`menuLi${i}`).mkChildNattribute('.menuLinks', 'class', `n-li menu-li menuLi-${i}`);
      window[`day${day}`] = crtDOM('a');
      eval(`day${day}`).mkChildNattNtext(`.menuLi-${i}`, 'class', `n-link menu-a menu-a-${i}`, day);
      eval(`day${day}`).dom.setAttribute('href', '#');
      eval(`day${day}`).dom.setAttribute('data', i);
    });
    const hlD = crtDOM('div').mkChildNattribute('#headline', 'id', 'headline-d');
    const hlP = crtDOM('p').mkChildNattNtext('#headline-d', 'class', 'h-d-p', 'Please pick a day');
  }
  function weekday(day) {
    erase.pointedElm('#headline-d');
    const hlD = crtDOM('div').mkChildNattribute('#headline', 'id', 'headline-d');
    const hlH3 = crtDOM('h3')
      .mkChildNattNtext('#headline-d', 'class', 'headline-h', day);
    const hlP = crtDOM('p').mkChildNattNtext('#headline-d', 'class', 'headline-p', `
          <li>${day} Soup</li>
          <li>${day} Salad</li>
          <li>${day} Entré</li>
          <li>${day} Dessert</li>
    `);
  }
  function Monday() { weekday('Monday'); }
  function Tuesday() { weekday('Tuesday'); }
  function Wednesday() { weekday('Wednesday'); }
  function Thursday() { weekday('Thursday'); }
  function Friday() { weekday('Friday'); }
  function Saturday() { weekday('Saturday'); }
  const days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];

  return {
    init,
    Monday,
    menuBttns,
    days,
  };
})();

export default menu;