import React from 'react';

const Navbar = ({dealOneCard, shuffle, cardsDealt, canDeal}) => {
  if (!canDeal) {
    alert('The entire deck was dealt!');
  }
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Jive House of Cards</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {canDeal &&
              <li><a href="#" onClick={shuffle}>Shuffle</a></li>
            }
            {canDeal &&
              <li><a href="#" onClick={dealOneCard}>Deal Card</a></li>
            }
            <li><p className="navbar-text">Cards dealt: {cardsDealt}</p></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
