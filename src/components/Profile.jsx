import React from 'react';

export default function Profile({ learned, allWords }) {
  const food = learned.filter((el) => el.Word.theme_id === 1);
  const transport = learned.filter((el) => el.Word.theme_id === 2);
  const meeting = learned.filter((el) => el.Word.theme_id === 3); // Theme

  const countFood = allWords.filter((el) => el.Theme.id === 1);
  const countTransport = allWords.filter((el) => el.Theme.id === 2);
  const countMeeting = allWords.filter((el) => el.Theme.id === 3);

  const allResult = Math.round((learned.length / allWords.length) * 100);
  const resultFood = Math.round((food.length / countFood.length) * 100);
  const resultTransport = Math.round((transport.length / countTransport.length) * 100);
  const resultMeeting = Math.round((meeting.length / countMeeting.length) * 100);

  // console.log(food.length, transport.length, meeting.length, allWords.length);

  // console.log(food);
  return (
    <div>
      <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ width: `${allResult}%` }}>
          {allResult}
        </div>
      </div>
      <div>Общий прогрес</div>
      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-success" style={{ width: `${resultFood}%` }} />
        {resultFood}
      </div>

      <div>Еда</div>
      <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-info" style={{ width: `${resultTransport}%` }} />
        {resultTransport}
      </div>
      <div>Транспорт</div>
      <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-warning" style={{ width: `${resultMeeting}%` }} />
        {resultMeeting}
      </div>
      <div>Встречи</div>

    </div>
  );
}
