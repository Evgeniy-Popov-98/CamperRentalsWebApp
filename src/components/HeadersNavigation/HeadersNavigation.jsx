import { Link, NavLink } from 'react-router-dom';

import logoImg from '../../assets/images/logo_camper.png';
import css from './HeadersNavigation.module.css';
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.linkText, {
    [css.active]: isActive,
  });

export const HeadersNavigation = () => {
  return (
    <header className={css.headerContainer}>
      <Link to="/">
        <img className={css.headerLogo} src={logoImg} alt="" />
      </Link>
      <nav className={css.navLink}>
        <NavLink to="/" className={getNavLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavLinkClassName}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={getNavLinkClassName}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
