import { useSelector } from 'react-redux';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { selectAllCampers } from '../../redux/camper/selectors';
import { pagination } from '../../utils/pagination';

import css from './CatalogList.module.css';
import { useEffect, useState } from 'react';

export const CatalogList = () => {
  const campers = pagination(useSelector(selectAllCampers));
  const [index, setIndex] = useState(0);

  return (
    <div className={css.campersListBox}>
      <ul className={css.campersList}>
        {Array.isArray(campers) &&
          campers[index].map(camper => (
            <li key={camper._id}>
              <CatalogItem item={camper} />
            </li>
          ))}
      </ul>
      <button
        className={css.buttonLoadMore}
        type="submit"
        onClick={() => {
          setIndex(index + 1);
          //   setNewArr(campers[index]);
        }}
      >
        Load more
      </button>
    </div>
  );
};
