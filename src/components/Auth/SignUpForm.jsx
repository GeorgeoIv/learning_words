import React from 'react';

export default function SignUpForm() {
  const submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then((responce) => {
        if (responce.ok) {
          window.location = '/';
        }
      });
  };

  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </label>
            <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
            </label>
            <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
