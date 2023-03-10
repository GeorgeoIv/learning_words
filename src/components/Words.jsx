import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneWord from './OneWord';

export default function Words({ words }) {
  const [allWords, setAllWords] = useState(words || []);

  // useEffect(() => {
  //   axios(`/api/theme/${words[0].theme_id}`).then(({ data }) => setAllWords(data)).catch(console.log);
  // }, []);
  return (
    <>
      <h1>Choose the word</h1>
      <div className="row">
        {allWords?.map((el) => <div key={el.id} className="col-4"><OneWord setAllWords={setAllWords} word={el} key={el.id} /></div>)}
      </div>
    </>
  );
}
