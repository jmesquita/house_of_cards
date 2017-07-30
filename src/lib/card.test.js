import Card from './card';

describe('cards have', () => {

  test('proper validation', () => {
    expect(_ => new Card('hearts', 20)).toThrow();
    expect(_ => new Card('hearts', 0)).toThrow();
    expect(_ => new Card('typo', 20)).toThrow();
    expect( _ => new Card('hearts', 2)).toEqual(expect.anything());
  });

});
