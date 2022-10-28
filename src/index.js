import Didact from "./Didact";
import Counter from "./Counter";

/** @jsx Didact.createElement */
const element = <Counter />;
const container = document.getElementById("root");

Didact.render(element, container);
