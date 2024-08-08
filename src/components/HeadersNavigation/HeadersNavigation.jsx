import { NavLink } from 'react-router-dom';

export const HeadersNavigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};
