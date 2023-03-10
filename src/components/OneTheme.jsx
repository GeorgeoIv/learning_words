import React from 'react';

export default function OneTheme({ theme }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={`${theme.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${theme.title}`}</h5>
        <p className="card-text">Слова в каждой теме подобранны таким образом, чтобы изучение темы было максимально комфортным</p>
        <a href={`/${theme.title}`} className="btn btn-primary">Поехали</a>
      </div>
    </div>

  );
}
