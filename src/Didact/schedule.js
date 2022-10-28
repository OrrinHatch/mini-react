export function schedule(callback, options) {
  return requestIdleCallback(callback, options);
}
