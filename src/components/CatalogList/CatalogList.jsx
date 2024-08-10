import { CatalogItem } from '../CatalogItem/CatalogItem';

import css from './CatalogList.module.css';

export const CatalogList = ({ newArr, upDataArr }) => {
  return (
    <div className={css.campersListBox}>
      <ul className={css.campersList}>
        {Array.isArray(newArr) &&
          newArr.map(camper => (
            <li key={camper._id}>
              <CatalogItem item={camper} />
            </li>
          ))}
      </ul>
      <button
        className={css.buttonLoadMore}
        type="submit"
        onClick={() => {
          upDataArr();
        }}
      >
        Load more
      </button>
    </div>
  );
};
