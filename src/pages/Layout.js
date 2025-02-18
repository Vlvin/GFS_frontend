import { Outlet } from "react-router";
import LoginPartial from "./LoginPartial";

export default function Layout() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand">Ghost Forms Social</h1>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
              <LoginPartial/>
            </ul>
        </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
}
  
