import { Outlet } from "react-router";
import LoginPartial from "./LoginPartial";

export default function Layout() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarSupportedContent'>
              <h1 className="navbar-brand">Ghost Forms Social</h1>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <LoginPartial />
              </ul>
            </div>
            <form className="form-inline my-2 my-lg-0" method="GET" action="/find">
              <input className="form-control mr-sm-2" name="keyword" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      <main className="container-liquid">
        <Outlet />
      </main>
    </div>
  );
}

