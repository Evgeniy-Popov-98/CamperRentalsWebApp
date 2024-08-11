import { CatalogItem } from '../CatalogItem/CatalogItem';

import css from './CatalogList.module.css';

export const CatalogList = ({ newArr, upDataArr, isActivBtn = true }) => {
  console.log(newArr);

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
      {isActivBtn && (
        <button
          className={css.buttonLoadMore}
          type="submit"
          onClick={() => {
            // upDataArr(true);
            upDataArr();
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};
