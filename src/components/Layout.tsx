import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Hem</Link>
            </li>
            <li>
              <Link to={"/about"}>Om</Link>
            </li>
            <li>
              <Link to={"/contact"}>Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};
