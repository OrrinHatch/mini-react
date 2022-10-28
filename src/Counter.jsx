import Didact from "./Didact";

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return (
    <div>
      <h1 onClick={() => setState((c) => c + 1)}>Count {state}</h1>
    </div>
  );
}

export default Counter;
