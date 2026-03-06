let _state = {};
let _subscribers = new Set<() => void>();

export const AuthStore = {
  getState: () => {
    return { ..._state };
  },
  subscribe: (clbk: () => void) => {
    _subscribers.add(clbk);
    return () => _subscribers.delete(clbk);
  },
  setState: (key: string, value: unknown) => {
    _state = {
      ..._state,
      [key]: value,
    }
  },
}
