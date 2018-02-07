const defaultState = [
  { id: 0, val: 1, sync: true },
  { id: 1, val: 2, sync: true },
  { id: 2, val: 3, sync: true },
];

// Helper functions
const modifyVal = (state, id, newVal, newStatus) => {
  const stateObject = state.find(obj => obj.id === id);

  return state.slice(0, id)
    .concat({ ...stateObject, val: newVal, sync: newStatus })
    .concat(state.slice(id + 1, state.length));
};

const modifySync = (state, id, newStatus) => {
  const stateObject = state.find(obj => obj.id === id);

  return state.slice(0, id)
    .concat({ ...stateObject, sync: newStatus })
    .concat(state.slice(id + 1, state.length));
};

// Export the helper functions for testing and the reducer
export { modifyVal, modifySync };
export default (state = defaultState, action) => {
  const { type, meta, payload } = action;
  const { id, currentVal } = payload || {};

  switch (type) {
    case 'INCREMENT_REQUEST':
      return modifyVal(state, id, currentVal + 1, false);
    case 'DECREMENT_REQUEST':
      return modifyVal(state, id, currentVal - 1, false);
    case 'RESET_REQUEST':
      return modifyVal(state, id, 0, false);
    case 'INCREMENT_COMMIT':
    case 'DECREMENT_COMMIT':
    case 'RESET_COMMIT':
      return modifySync(state, meta.id, true);
    case 'INCREMENT_ROLLBACK':
    case 'DECREMENT_ROLLBACK':
    case 'RESET_ROLLBACK':
      return modifyVal(state, id, meta.lastVal, true);
    default:
      return state;
  }
};
