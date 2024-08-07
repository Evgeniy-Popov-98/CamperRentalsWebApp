import { NavLink } from 'react-router-dom';

export const HeadersNavigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/catalog" className="">
          Catalog
        </NavLink>
        <NavLink to="/favorites" className="">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
