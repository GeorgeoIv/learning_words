import React from 'react';
import OneTheme from './OneTheme';

export default function Themes({ themes, currentUser }) {
  return (
    <div className="row">
      <h1>Choose the theme</h1>
      {currentUser ? (
        themes?.map((el) => <OneTheme theme={el} key={el.id} />)
      )
        : (<h1>вас тут нет</h1>)}
    </div>
  );
}
