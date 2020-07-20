// === DOM code to make te inital page view ===
console.log("in 2nd file");

function crtDOM(type) {
  dom = document.createElement(type)
  const mkChild = (parent) => { document.getElementById(parent).appendChild(dom) }
  const addAttribute = (att, val) => { dom.setAttribute(att, val) }
  // const addText = (text) => { dom.innerHTML = text }
  const mkChildNattribute = (parent, att, val) => {
    mkChild(parent)
    addAttribute(att, val)
  }
  const mkChildNattNtext = (parent, att, val, txt) => {
    mkChildNattribute(parent, att, val)
    dom.innerHTML = txt
  }
  // const crtClass = (type) => { console.log(`Is this the class: ${type}`) }

  return { mkChildNattribute, mkChildNattNtext, dom }
};

let div1 = crtDOM('div');
div1.mkChildNattNtext('content', 'class', 'test', 'adding text');
// div1.mkChildNattNtext('content', 'test', 'adding text');
let div2 = crtDOM('div');
div1.mkChildNattribute ('content', 'id', 'test');
console.log(div1, div2);

// // Factory Function  ;  for multiple occurrences
// const personFactory = (name, age) => {
//   const sayHello = () => console.log('hello!');
//   return { name, age, sayHello };
// };
//
// const jeff = personFactory('jeff', 27);

// // Module Pattern  ;  for 1 occurrence
// const calculator = (() => {
//   const add = (a, b) => a + b;
//   return {
//     add,
//   };
// })();
//
// calculator.add(3,5) // 8



// // TEST
// const createUser = ({ userName, avatar }) => ({
//   userName,
//   avatar,
//   setUserName (userName) {
//     this.userName = userName;
//     return this;
//   }
// });
// let user = createUser({ userName: 'echo', avatar: 'echo.png' });
// console.log(user);