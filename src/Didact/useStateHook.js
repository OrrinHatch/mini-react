export function useStateHook(initial) {
  const oldHook =
    window.wipFiber.alternate &&
    window.wipFiber.alternate.hooks &&
    window.wipFiber.alternate.hooks[window.hookIndex];

  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach((action) => {
    hook.state = action(hook.state);
  });

  const setState = (action) => {
    hook.queue.push(action);
    window.wipRoot = {
      dom: window.currentRoot.dom,
      props: window.currentRoot.props,
      alternate: window.currentRoot,
    };
    window.nextUnitOfWork = window.wipRoot;
    window.deletions = [];
  };

  window.wipFiber.hooks.push(hook);
  window.hookIndex++;
  return [hook.state, setState];
}
