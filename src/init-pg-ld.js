// === DOM code to make te inital page view ===

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

// Make the DOM elements from the crtDOM Module
const initPageLoad = (() => {
  const nav = crtDOM('nav');
  nav.mkChildNattribute('#content', 'id', 'header-nav');
  // const navLogo = crtDOM('div');
  // navLogo.mkChildNattNtext('#header-nav', 'class', 'logo', 'Baratie');
  const navLogo = crtDOM('img');
  navLogo.mkChildNattribute('#header-nav', 'class', 'logo');
  navLogo.addAttribute('src', '../src/logoBaratie.png')
  const navUL = crtDOM('ul');
  navUL.mkChildNattribute('#header-nav', 'class', 'links');
  ['Home', 'Menu', 'Contact'].forEach((e, i) => {
    window[`nli${i}`] = crtDOM('li');
    eval('nli'+ i).mkChildNattribute('.links', 'class', `n-li nli-${i}`);
    window['link2' + e] = crtDOM('a');
    eval('link2' + e).mkChildNattNtext(`.nli-${i}`, 'class', `n-link n-a-${i}`, e);
    eval('link2' + e).dom.setAttribute('href', '#');
  });
  const theHome = () => {
    const headline = crtDOM('div');
    headline.mkChildNattribute('#content', 'id', 'headline');
    const hlH2 = crtDOM('h2');
    hlH2.mkChildNattNtext('#headline', 'class', 'headline-h', 'The best restaurant in town');
    const hlP = crtDOM('p');
    hlP.mkChildNattNtext('#headline', 'class', 'headline-p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

    return { headline, hlH2, hlP }
  };
  const vars = [nav, navLogo, theHome() ];

  return { theHome, vars }
})();

export { crtDOM, initPageLoad }