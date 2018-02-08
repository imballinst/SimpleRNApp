import {
  actionCreator,
  increment,
  decrement,
  reset,
} from '../counter';

describe('counter', () => {
  it('should return increment action creator', () => {
    expect(increment(1, 2)).toEqual(actionCreator(
      'https://dog.ceo/api/breeds/list/all',
      'INCREMENT',
      1,
      2
    ));
  });

  it('should return decrement action creator', () => {
    expect(decrement(2, 3)).toEqual(actionCreator(
      'https://dog.ceo/api/breeds/list/all',
      'DECREMENT',
      2,
      3
    ));
  });

  it('should return reset action creator', () => {
    expect(reset(3, 4)).toEqual(actionCreator(
      'https://dog.ceo/api/breeds/list/all',
      'RESET',
      3,
      4
    ));
  });
});
