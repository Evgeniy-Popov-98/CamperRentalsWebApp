import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectAllCampers } from '../../redux/camper/selectors';
import { pagination, paginationNewArr } from '../../utils/pagination';

import { FiltersBox } from '../../components/FiltersBox/FiltersBox';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { fetchCampers } from '../../redux/camper/operations';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = pagination(useSelector(selectAllCampers));
  const [index, setIndex] = useState(0);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    const data = paginationNewArr(campers, index);
    setNewArr(prevState => [...prevState, ...data]);
  }, [index]);

  const upDataArr = () => {
    if (index < campers.length - 1) setIndex(index + 1);
  };

  return (
    <section className={css.catalogSection}>
      <FiltersBox />
      <CatalogList newArr={newArr} upDataArr={upDataArr} />
    </section>
  );
};

export default CatalogPage;
