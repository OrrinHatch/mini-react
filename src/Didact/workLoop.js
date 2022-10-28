import { schedule } from "./schedule";
import { performUnitOfWork } from "./performUnitOfWork";
import { commitRoot } from "./commit";

export function workLoop(deadline) {
  let shouldYield = false;
  while (window.nextUnitOfWork && !shouldYield) {
    window.nextUnitOfWork = performUnitOfWork(window.nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!window.nextUnitOfWork && window.wipRoot) {
    commitRoot();
  }

  schedule(workLoop);
}
