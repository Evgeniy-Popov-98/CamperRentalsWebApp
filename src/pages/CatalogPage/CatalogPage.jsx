import { FiltersBox } from '../../components/FiltersBox/FiltersBox';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/camper/operations';

import css from './CatalogPage.module.css';

export const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className={css.catalogSection}>
      <FiltersBox />
      <CatalogList />
    </section>
  );
};
