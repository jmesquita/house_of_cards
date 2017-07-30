import React from 'react';

import Card from './Card';

const DealtCards = ({cards}) => {
  return (
    <div>
      {cards.map(
        (card, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-1">
                <Card face={card.face} suite={card.suite}></Card>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default DealtCards
