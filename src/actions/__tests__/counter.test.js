import { increment, decrement, reset } from '../counter';

describe('counter', () => {
  describe('counter', () => {
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

    it('should return increment action creator', () => {
      expect(increment(1, 1)).toEqual(actionCreator(
        'https://dog.ceo/api/breeds/list/all',
        'INCREMENT',
        1,
        1
      ));
    });

    it('should return decrement action creator', () => {
      expect(decrement(1, 1)).toEqual(actionCreator(
        'https://dog.ceo/api/breeds/list/all',
        'DECREMENT',
        1,
        1
      ));
    });

    it('should return reset action creator', () => {
      expect(reset(1, 1)).toEqual(actionCreator(
        'https://dog.ceo/api/breeds/list/all',
        'RESET',
        1,
        1
      ));
    });
  });
});
