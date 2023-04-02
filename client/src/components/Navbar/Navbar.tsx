import { Link } from "react-router-dom";
import Logo from "/assets/images/logo.png";
import IconSearch from "/assets/images/icon-search.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <Link to="/">
          <img
            className="img-responsive"
            src={Logo}
            alt="Logo Mercado Libre"
            title="Mercado Libre"
            width={70}
          />
        </Link>

        <form className="navbar-search">
          <input
            className="navbar-search-input"
            placeholder="Nunca dejes de buscar"
            type="search"
          />
          <button className="navbar-search-button">
            <img src={IconSearch} alt="Icon Search" width={18} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
