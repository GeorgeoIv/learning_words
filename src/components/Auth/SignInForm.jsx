import React from 'react';
import SignUpForm from './SignUpForm';

export default function SignInForm() {
  const submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
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
                placeholder="Enter email..."
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
                placeholder="Password..."
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <div><button type="button" onClick={() => { window.location = '/auth/signup'; }} className="btn btn-success">Регистрация</button></div>

      </div>
    </div>
  );
}
