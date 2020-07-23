/* eslint-disable no-unused-vars, no-eval  */
// === DOM code to make te inital page view ===

// ----- Factory Function to make DOM elements -----
function crtDOM(type) {
  const dom = document.createElement(type);
  const mkChild = (parent) => { document.querySelector(parent).appendChild(dom); };
  const addAttribute = (att, val) => { dom.setAttribute(att, val); };
  const mkChildNattribute = (parent, att, val) => {
    mkChild(parent);
    addAttribute(att, val);
  };
  const mkChildNattNtext = (parent, att, val, txt) => {
    mkChildNattribute(parent, att, val);
    dom.innerHTML = txt;
  };

  return {
    mkChildNattribute,
    mkChildNattNtext,
    addAttribute,
    dom,
  };
}

// ----- Module for Erase-Tab content -----
const erase = (() => {
  const elem = (e) => { e.remove(); };
  const pointedElm = (tag) => {
    const domElem = document.querySelector(tag);
    erase.elem(domElem);
  };

  return { elem, pointedElm };
})();

export { crtDOM, erase };