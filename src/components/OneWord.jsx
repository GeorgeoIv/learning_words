import React, { useState } from 'react';
import axios from 'axios';

export default function OneWord({ word, setAllWords }) {
  console.log(word);
  const [isClicked, setClick] = useState(false);
  const learnHandler = async (id) => {
    setAllWords((prev) => prev.filter((el) => el.id !== id));
    await axios.post('api/words', word);
  };
  const clickHandler = async () => {
    setClick((prev) => !prev);
  };
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={`${word.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${word.rus}`}</h5>
        {isClicked ? (
          <p className="card-text">{`${word.eng}`}</p>)
          : (
            <p>нажми если не знаешь перевод</p>)}

        <button type="button" className="btn btn-success" name="word" onClick={() => learnHandler(word.id)}>Изучено</button>
      </div>
    </div>

  );
}
