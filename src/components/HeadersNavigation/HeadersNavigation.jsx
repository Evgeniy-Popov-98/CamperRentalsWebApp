import { Link, NavLink } from 'react-router-dom';

import css from './HeadersNavigation.module.css';
import logoImg from '../../assets/images/logo_camper.png';

export const HeadersNavigation = () => {
  return (
    <header className={css.headerContainer}>
      <Link to="/">
        <img className={css.headerLogo} src={logoImg} alt="" />
      </Link>
      <nav className={css.navLink}>
        <NavLink to="/" className={css.linkText}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.linkText}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={css.linkText}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
