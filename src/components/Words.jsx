import React from 'react';
import OneWord from './OneTheme';

export default function Words({ words }) {
  return (
    <div>
      <h1>Choose the word</h1>
      {words?.map((el) => <OneWord word={el} key={el.id} />)}
    </div>
  );
}
