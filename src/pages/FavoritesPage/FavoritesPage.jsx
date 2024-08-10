import { useState } from 'react';
import { dataLocal } from '../../constans/constans';

import { ModalForm } from '../../components/ModalForm/ModalForm';
import { CatalogItem } from '../../components/CatalogItem/CatalogItem';

import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const [dataList, setDataList] = useState(() => {
    const data = dataLocal();

    if (data !== null) {
      return data;
    }

    return {};
  });

  return (
    <div className={css.favoritesSection}>
      <div className={css.formcontainer}>
        <ModalForm />
      </div>
      <div>
        <ul className={css.canperList}>
          {Array.isArray(dataList) &&
            dataList.map(camper => (
              <li key={camper._id}>
                <CatalogItem item={camper} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesPage;
