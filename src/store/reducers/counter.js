const defaultState = [
  { id: 0, counter: 1, sync: true },
  { id: 1, counter: 2, sync: true },
  { id: 2, counter: 3, sync: true },
];

const modifyCounter = (state, id, newCounter, newStatus) => {
  const stateObject = state.find(obj => obj.id === id);

  return state.slice(0, id)
    .concat({ ...stateObject, counter: newCounter, sync: newStatus })
    .concat(state.slice(id + 1, state.length));
};

const modifySync = (state, id, newStatus) => {
  const stateObject = state.find(obj => obj.id === id);

  return state.slice(0, id)
    .concat({ ...stateObject, sync: newStatus })
    .concat(state.slice(id + 1, state.length));
};

const counter = (state = defaultState, action) => {
  const { type, meta, payload } = action;
  const { id, currentVal } = payload || {};

  switch (type) {
    case 'INCREMENT_REQUEST':
      return modifyCounter(state, id, currentVal + 1, false);
    case 'DECREMENT_REQUEST':
      return modifyCounter(state, id, currentVal - 1, false);
    case 'RESET_REQUEST':
      return modifyCounter(state, id, 0, false);
    case 'INCREMENT_COMMIT':
    case 'DECREMENT_COMMIT':
    case 'RESET_COMMIT':
      return modifySync(state, meta.id, true);
    case 'INCREMENT_ROLLBACK':
    case 'DECREMENT_ROLLBACK':
    case 'RESET_ROLLBACK':
      return modifyCounter(state, id, meta.lastVal, true);
    default:
      return state;
  }
};

export default counter;
