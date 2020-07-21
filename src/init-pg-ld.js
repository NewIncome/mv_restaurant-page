// === DOM code to make te inital page view ===
console.log("in 2nd file");

// ----- Factory Function to make DOM elements -----
function crtDOM(type) {
  let dom = document.createElement(type)
  const mkChild = (parent) => { document.querySelector(parent).appendChild(dom) }
  const addAttribute = (att, val) => { dom.setAttribute(att, val) }
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
function initPageLoad() {
  const nav = crtDOM('nav').mkChildNattribute('#content', 'id', 'header-nav');
  const navLogo = crtDOM('div').mkChildNattNtext('#header-nav', 'class', 'logo', 'Baratie');
  const navUL = crtDOM('ul').mkChildNattribute('#header-nav', 'class', 'links');
  ['Home', 'Menu', 'Contact'].forEach((e, i) => {
    eval(`let nli${i}` + '=' + crtDOM('li').mkChildNattribute('.links', 'class', `n-li nli-${i}`));
    window['link2' + e] = crtDOM('a');
    eval('link2' + e).mkChildNattNtext(`.nli-${i}`, 'class', `n-link n-a-${i}`, e);
    eval('link2' + e).dom.setAttribute('href', '#') });
  const headline = crtDOM('div').mkChildNattribute('#content', 'id', 'headline');
  const hlH2 = crtDOM('h2').mkChildNattNtext('#headline', 'class', 'headline-h', 'The best restaurant in town');
  const hlP = crtDOM('p').mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
};

export { crtDOM, initPageLoad }

// // Module Pattern  ;  for 1 occurrence
// const calculator = (() => {
//   const add = (a, b) => a + b;
//   return {
//     add,
//   };
// })();
//
// calculator.add(3,5) // 8