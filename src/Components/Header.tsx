import React from 'react';

const Header = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('sv-SE', options);

    return (
      <header>
        <h2>Idag är det {formattedDate}</h2>
      </header>
    );
  };

  export default Header;
  