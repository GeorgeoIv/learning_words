import React from 'react';
import OneWord from './OneWord';

export default function Words({ words }) {
  return (
    <div className="row">
      <h1>Choose the word</h1>
      {words?.map((el) => <OneWord word={el} key={el.id} />)}
    </div>
  );
}
