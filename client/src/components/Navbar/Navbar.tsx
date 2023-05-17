import { Link, useNavigate } from "react-router-dom";
import Logo from "/assets/images/logo.png";
import IconSearch from "/assets/images/icon-search.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      navigate(`/items?search=${value}`);
    }
  };

  const handleChange = (value: string) => {
    setValue(value);
  };

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
            loading="lazy"
          />
        </Link>

        <form className="navbar-search" onSubmit={handleSubmit}>
          <input
            className="navbar-search-input"
            placeholder="Nunca dejes de buscar"
            type="search"
            onChange={(event) => handleChange(event.target.value)}
          />
          <button className="navbar-search-button">
            <img src={IconSearch} alt="Icon Search" width={18} loading="lazy" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
