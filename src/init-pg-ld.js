// === DOM code to make te inital page view ===
console.log("in 2nd file");

// ----- Factory Function to make DOM elements -----
function crtDOM(type) {
  dom = document.createElement(type)
  const mkChild = (parent) => { document.querySelector(parent).appendChild(dom) }
  const addAttribute = (att, val) => { this.dom.setAttribute(att, val) }
  const mkChildNattribute = (parent, att, val) => {
    mkChild(parent)
    addAttribute(att, val)
  }
  const mkChildNattNtext = (parent, att, val, txt) => {
    mkChildNattribute(parent, att, val)
    dom.innerHTML = txt
  }

  return { mkChildNattribute, mkChildNattNtext, addAttribute, dom }
};

// Make the DOM elements from the crtDOM Factory Function
const nav = crtDOM('nav').mkChildNattribute('#content', 'id', 'header-nav');
const navLogo = crtDOM('div').mkChildNattNtext('#header-nav', 'class', 'logo', 'Baratie');
const navUL = crtDOM('ul').mkChildNattribute('#header-nav', 'class', 'links');
['Home', 'Menu', 'Contact'].forEach((e, i) => {
  eval(`nli${i}` + '=' + crtDOM('li').mkChildNattribute('.links', 'class', `n-li nli-${i}`))
  crtDOM('a').mkChildNattNtext(`.nli-${i}`, 'class', `n-link n-a-${i}`, e)
  document.querySelector(`.n-a-${i}`).setAttribute('href', '#') });
const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'The best restaurant in town');
const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

// // Module Pattern  ;  for 1 occurrence
// const calculator = (() => {
//   const add = (a, b) => a + b;
//   return {
//     add,
//   };
// })();
//
// calculator.add(3,5) // 8