import React from 'react';

function Header({ currentUser, setCurrentUser }) {
  const logoutHandler = () => {
    fetch('/api/auth/logout', { method: 'POST' })
      .then((response) => {
        if (response.ok) {
          setCurrentUser(null);
        }
      });
  };
  return (
    <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
      <div className="max-w-700 center wrap-float">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  <a className="nav-link active" aria-current="page" href="/themes">Themes</a>
                </li>
              </ul>
            </div>
            {currentUser
              ? (
                <ul className="navbar-nav">
                  <li className="nav-item d-flex align-items-center me-4">
                    <span aria-current="page">
                      Hello,
                      {' '}
                      {currentUser.name}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn btn-success" onClick={logoutHandler}>LogOut</button>
                  </li>
                </ul>
              )
              : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/auth/signup">SignUp</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signin">SignIn</a>
                  </li>
                </ul>
              )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
