import React from "react";

export default function OneTheme({ theme, result, count, allThe }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`${theme.img}`}
        className="card-img-top"
        alt="..."
        style={{ height: "12rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{`${theme.title}`}</h5>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-success"
          style={{ width: `${count}%` }}
        >
          {result}/{allThe.length}
        </div>
      </div>
    </div>
  );
}
