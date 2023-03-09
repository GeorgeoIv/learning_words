import React from 'react';
import OneTheme from './OneTheme';

export default function Themes({ themes }) {
  return (
    <div>
      <h1>Choose the theme</h1>
      {themes?.map((el) => <OneTheme theme={el} key={el.id} />)}
    </div>
  );
}
