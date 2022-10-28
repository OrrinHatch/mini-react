import { createElement } from "./createElement";
import { render } from "./render";
import { useState } from "./useStateHook";

Object(window, {
  nextUnitOfWork: null,
  currentRoot: null,
  wipRoot: null,
  deletions: [],
  wipFiber: null,
  hookIndex: null,
});


const Didact = {
  createElement,
  render,
  useState,
};

export default Didact;
