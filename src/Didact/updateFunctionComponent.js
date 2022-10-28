import { reconcileChildren } from "./reconcileChildren";

export function updateFunctionComponent(fiber) {
  window.wipFiber = fiber;
  window.hookIndex = 0;
  window.wipFiber.hooks = [];
  // 这里的fiber.type是App函数，当我们运行它时，它会返回h1元素。
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}
