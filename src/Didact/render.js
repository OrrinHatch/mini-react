import { schedule } from "./schedule";
import { workLoop } from "./workLoop";

export function render(element, container) {
  window.wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: window.currentRoot,
  };
  window.deletions = [];
  window.nextUnitOfWork = window.wipRoot;
}

schedule(workLoop);
