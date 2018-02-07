import counter, { modifyVal, modifySync } from '../counter';

describe('counter', () => {
  // Default state
  const defaultState = [
    { id: 0, val: 1, sync: true },
    { id: 1, val: 2, sync: true },
    { id: 2, val: 3, sync: true },
  ];

  // Initial state
  it('should provide the initial state', () => {
    expect(counter(undefined, {})).toEqual(defaultState);
  });

  // Request actions
  it('should handle INCREMENT_REQUEST action', () => {
    const type = 'INCREMENT_REQUEST';
    const payload = { id: 0, currentVal: 1 };

    expect(counter(defaultState, { type, payload }))
      .toEqual(modifyVal(defaultState, 0, 2, false));
  });

  it('should handle DECREMENT_REQUEST action', () => {
    const type = 'DECREMENT_REQUEST';
    const payload = { id: 0, currentVal: 1 };

    expect(counter(defaultState, { type, payload }))
      .toEqual(modifyVal(defaultState, 0, 0, false));
  });

  it('should handle RESET_REQUEST action', () => {
    const type = 'RESET_REQUEST';
    const payload = { id: 0, currentVal: 1 };

    expect(counter(defaultState, { type, payload }))
      .toEqual(modifyVal(defaultState, 0, 0, false));
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
      .toEqual(modifyVal(defaultState, 0, 1, true));
  });

  it('should handle DECREMENT_ROLLBACK action', () => {
    const type = 'DECREMENT_ROLLBACK';
    const payload = { id: 0 };
    const meta = { lastVal: 1 };

    expect(counter(defaultState, { type, payload, meta }))
      .toEqual(modifyVal(defaultState, 0, 1, true));
  });

  it('should handle RESET_ROLLBACK action', () => {
    const type = 'RESET_ROLLBACK';
    const payload = { id: 0 };
    const meta = { lastVal: 1 };

    expect(counter(defaultState, { type, payload, meta }))
      .toEqual(modifyVal(defaultState, 0, 1, true));
  });
});
