import React from 'react';
import axios from 'axios';

export default function Add({ themes }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const resp = await axios.post('api/new', Object.fromEntries(new FormData(e.target)));
    window.location = '/themes';
  };
  return (
    <form onSubmit={submitHandler}>
      <h3>

        <select name="theme_id" className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {themes.map((el) => (
            <option value={el.id}>{el.title}</option>
          ))}
        </select>
        <input name="rus" className="form-control" type="text" placeholder="word in eng" aria-label="default" />
        <input name="eng" className="form-control" type="text" placeholder="word in ru" aria-label="default" />
        <input name="img" className="form-control" type="text" placeholder="img" aria-label="default" />
        <button type="submit" className="btn btn-primary">Добавить</button>
      </h3>

    </form>

  );
}
