import React from "react";
import OneThemePr from "./OneThemePr";

export default function Profile({ learned, allWords, themes, currentUser }) {
  const food = learned.filter((el) => el.Word.theme_id === 1);
  const transport = learned.filter((el) => el.Word.theme_id === 2);
  const meeting = learned.filter((el) => el.Word.theme_id === 3); // Theme

  const countFood = allWords.filter((el) => el.Theme.id === 1);
  const countTransport = allWords.filter((el) => el.Theme.id === 2);
  const countMeeting = allWords.filter((el) => el.Theme.id === 3);

  const allResult = Math.round((learned.length / allWords.length) * 100);
  const resultFood = Math.round((food.length / countFood.length) * 100);
  const resultTransport = Math.round(
    (transport.length / countTransport.length) * 100
  );
  const resultMeeting = Math.round(
    (meeting.length / countMeeting.length) * 100
  );

  console.log(allResult);

  // console.log(themes);
  return (
    <>
      <div className="row">
        <h1>Ваш общий прогресс</h1>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: `${allResult}%` }}>
            {learned.length}/{allWords.length}
          </div>
        </div>
      </div>
      `
      <div className="row">
        <OneThemePr theme={themes[0]} result={food.length} count={resultFood} allThe={countFood} />
        <OneThemePr
          theme={themes[1]}
          result={transport.length}
          count={resultTransport}
          allThe={countTransport}
        />
        <OneThemePr
          theme={themes[2]}
          result={meeting.length}
          count={resultMeeting}
          allThe={countMeeting}
        />
      </div>
    </>
  );
}
