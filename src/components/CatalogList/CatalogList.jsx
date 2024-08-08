import { useSelector } from 'react-redux';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { selectAllCampers } from '../../redux/camper/selectors';

import css from './CatalogList.module.css';

export const CatalogList = () => {
  const campers = useSelector(selectAllCampers);

  return (
    <div>
      <ul className={css.canperList}>
        {Array.isArray(campers) &&
          campers.map(camper => (
            <li key={camper.id}>
              <CatalogItem item={camper} />
            </li>
          ))}
      </ul>
    </div>
  );
};
