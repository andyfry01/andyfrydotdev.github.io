// Base utils 🛠
const Thrush = (x, f) => f(x);
const pipe = (...args) => x => args.reduce(Thrush, x);
const append = s1 => s2 => `${s2}${s1}`;
const converge = after => (...args) => after(...args);
const head = list => list[0];
const split = char => list => list.split(char);

const exampleIframes = {
  "monad-ex": [
    ["src","https://codesandbox.io/embed/lr0rv7omvl?autoresize=1&fontsize=14&hidenavigation=1"],
    ["style","width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"],
    ["title", "Monadic Russian Roulette"],
    ["sandbox","allow-modals allow-forms allow-popups allow-scripts allow-same-origin"],
    ["class", "demo-img"]
  ],
  "polyfill-ex": [
    ["src","https://codesandbox.io/embed/position-sticky-polyfill-with-hooks-bm8mn?fontsize=14&hidenavigation=1&theme=dark"],
    ["style","width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"],
    ["title", "Position: sticky polyfill with hooks"],
    ["sandbox","allow-modals allow-forms allow-popups allow-scripts allow-same-origin"]
  ],
  "reactfunction-ex": [
    ["src","https://codesandbox.io/embed/calling-react-components-as-functions-xg12i?fontsize=14&hidenavigation=1&theme=dark"],
    ["style","width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"],
    ["title", "Calling React components as functions"],
    ["sandbox","allow-modals allow-forms allow-popups allow-scripts allow-same-origin"]
  ],
  "partialapplication-ex": [
    ["src","https://codesandbox.io/embed/partial-application-and-currying-react-and-vanilla-js-omofv?fontsize=14&hidenavigation=1&theme=dark"],
    ["style","bwidth:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"],
    ["title", "bPartial application and currying: React and Vanilla JS"],
    ["sandbox","ballow-modals allow-forms allow-popups allow-scripts allow-same-origin"]
  ]
};

const embeddedLauncherWasClicked = s => s.indexOf("launcher") > -1;

const getExampleIdFrom = pipe(split("-"), head, append("-ex"));

const makeIframe = exName => {
  const iframe = document.createElement("iframe");
  exampleIframes[exName].forEach(([attr, value]) => iframe.setAttribute(attr, value));

  return iframe;
};

const swapImgWithIframe = id => iframe => {
  const exampleImg = document.getElementById(id);

  return exampleImg.parentNode.replaceChild(iframe, exampleImg);
};

const handleExLauncher = id => {
  const exampleImgId = getExampleIdFrom(id);
  const replaceImgWithIframe = pipe(makeIframe, swapImgWithIframe(exampleImgId));

  return replaceImgWithIframe(exampleImgId);
};

window.onload = () => {
  document.addEventListener("click", e => {
    const { target: { id } } = e;

    if (embeddedLauncherWasClicked(id)) {
      handleExLauncher(id);
    }
  });
};
