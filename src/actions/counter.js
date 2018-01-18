const actionCreator = (url, type, id, currentVal) => ({
  type: `${type}_REQUEST`,
  payload: { id, currentVal },
  meta: {
    offline: {
      effect: {
        method: 'HEAD',
        url,
      },
      commit: {
        type: `${type}_COMMIT`,
        meta: { id },
      },
      rollback: {
        type: `${type}_ROLLBACK`,
        meta: { lastVal: currentVal, id },
      },
    },
  },
});

const increment = (currentVal, id) => actionCreator(
  'https://dog.ceo/api/breeds/list/all',
  'INCREMENT',
  id,
  currentVal,
);

const decrement = (currentVal, id) => actionCreator(
  'https://dog.ceo/api/breeds/list/all',
  'DECREMENT',
  id,
  currentVal,
);

const reset = (currentVal, id) => actionCreator(
  'https://dog.ceo/api/breeds/list/all',
  'RESET',
  id,
  currentVal,
);

export { increment, decrement, reset };
