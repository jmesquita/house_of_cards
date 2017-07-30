import React from 'react';
import classNames from 'classnames';

const SUITES = {
  hearts: 'hearts',
  clubs: 'clubs',
  spades: 'spades',
  'diamonds': 'diams'
};

const FACES = {
  '1': 'A',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': '10',
  '11': 'J',
  '12': 'Q',
  '13': 'K'
};

const Card = ({face, suite}) => {
  return (
    <div className="playingCards simpleCards">
      <div className={classNames("card", `rank-${FACES[face].toLowerCase()}`, SUITES[suite])}>
        <div className="rank">{FACES[face]}</div>
        <div className="suit"></div>
      </div>
    </div>
  );
}

export default Card
