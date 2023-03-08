import React from 'react';
import axios from 'axios';

export default function OneWord({ word }) {
  const learnHandler = async (e) => {
    const res = await axios.post('/api/words', word);
  };
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={`${word.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${word.name}`}</h5>
        <p className="card-text">text</p>
        <button type="button" className="btn btn-success" name="word" onClick={learnHandler}>Success</button>
      </div>
    </div>

  );
}
