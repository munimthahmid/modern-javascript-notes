//when we run our JS code in server we use node fileName.js but in browser we don't need node,Now the global object in browser is known as window, but that is not available in node. In case of node that is 'global'

//PREVIOUSlY we used this in server
global.setTimeout(() => {
  console.log("Hi there!");
}, 100);

//And this in browser, but it shows error in server
// window.setTimeout(() => {
//   console.log("Hi there!");
// }, 100);

//We applied following technique to get over this problem:

function getGlobal() {
  if (typeof window != "undefined") return window;
  if (typeof global != "undefined") return global;
}

getGlobal().setTimeout(() => {
  console.log("Hi there!");
}, 100);

//BUT AFTER ES11 NOW WE CAN SIMPLY USE 'globalthis' EVERYWHERE

globalThis.setTimeout(() => {
  console.log("Hello World!");
}, 100);
