const SUITES = ['hearts', 'spades', 'clubs', 'diamonds'];

class Card {
  /**
   * Represents a card
   *
   * @param {String} suite - The suite as a string
   * @param {Number} face - The face value as an integer
   */
  constructor(suite, face) {
    if (face < 1 || face > 13) {
      throw Error(`Invalid face value ${face}, face value must be between 1 and 13`)
    }
    if (!SUITES.includes(suite)) {
      throw Error(`Invalid suite, valid suites are ${SUITES}`)
    }

    this._face = face;
    this._suite = suite;
  }

  /**
   * Gets the suite of a card
   *
   * @returns {String} - The suite
   */
  getSuite() {
    return this._suite;
  }

  /**
   * Gets the face of a card
   *
   * @returns {Number} - The face
   */
  getFace() {
    return this._face;
  }
}

export default Card
