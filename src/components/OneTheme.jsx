import React from 'react';

export default function OneTheme({ theme }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={`${theme.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${theme.title}`}</h5>
        <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card"</p>
        <a href={`/${theme.title}`} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  );
}
