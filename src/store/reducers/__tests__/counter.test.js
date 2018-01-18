import counter from '../counter';

describe('counter', () => {
  // Default state
  const defaultState = [
    { id: 0, counter: 1, sync: true },
    { id: 1, counter: 2, sync: true },
    { id: 2, counter: 3, sync: true },
  ];

  // Helper functions
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

  // Initial state
  it('should provide the initial state', () => {
    expect(counter(undefined, {})).toEqual(defaultState);
  });

  // Request actions
  it('should handle INCREMENT_REQUEST action', () => {
    const type = 'INCREMENT_REQUEST';
    const payload = { id: 0, currentVal: 1 };

    expect(counter(defaultState, { type, payload }))
      .toEqual(modifyCounter(defaultState, 0, 2, false));
  });

  it('should handle DECREMENT_REQUEST action', () => {
    const type = 'DECREMENT_REQUEST';
    const payload = { id: 0, currentVal: 1 };

    expect(counter(defaultState, { type, payload }))
      .toEqual(modifyCounter(defaultState, 0, 0, false));
  });

  it('should handle RESET_REQUEST action', () => {
    const type = 'RESET_REQUEST';
    const payload = { id: 0, currentVal: 1 };

    expect(counter(defaultState, { type, payload }))
      .toEqual(modifyCounter(defaultState, 0, 0, false));
  });

  // Commit actions
  it('should handle INCREMENT_COMMIT action', () => {
    const type = 'INCREMENT_COMMIT';
    const meta = { id: 0 };

    expect(counter(defaultState, { type, meta }))
      .toEqual(modifySync(defaultState, 0, true));
  });

  it('should handle DECREMENT_COMMIT action', () => {
    const type = 'DECREMENT_COMMIT';
    const meta = { id: 0 };

    expect(counter(defaultState, { type, meta }))
      .toEqual(modifySync(defaultState, 0, true));
  });

  it('should handle RESET_COMMIT action', () => {
    const type = 'RESET_COMMIT';
    const meta = { id: 0 };

    expect(counter(defaultState, { type, meta }))
      .toEqual(modifySync(defaultState, 0, true));
  });

  // Rollback actions
  it('should handle INCREMENT_ROLLBACK action', () => {
    const type = 'INCREMENT_ROLLBACK';
    const payload = { id: 0 };
    const meta = { lastVal: 1 };

    expect(counter(defaultState, { type, payload, meta }))
      .toEqual(modifyCounter(defaultState, 0, 1, true));
  });

  it('should handle DECREMENT_ROLLBACK action', () => {
    const type = 'DECREMENT_ROLLBACK';
    const payload = { id: 0 };
    const meta = { lastVal: 1 };

    expect(counter(defaultState, { type, payload, meta }))
      .toEqual(modifyCounter(defaultState, 0, 1, true));
  });

  it('should handle RESET_ROLLBACK action', () => {
    const type = 'RESET_ROLLBACK';
    const payload = { id: 0 };
    const meta = { lastVal: 1 };

    expect(counter(defaultState, { type, payload, meta }))
      .toEqual(modifyCounter(defaultState, 0, 1, true));
  });
});
