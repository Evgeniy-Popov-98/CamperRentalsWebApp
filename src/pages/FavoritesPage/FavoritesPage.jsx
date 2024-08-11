import { useState } from 'react';
import { dataLocal } from '../../constans/constans';

import { FavoritesItem } from '../../components/FavoritesItem/FavoritesItem';
import { ModalForm } from '../../components/ModalForm/ModalForm';

import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const [dataList, setDataList] = useState(() => {
    const data = dataLocal();

    if (data !== null) {
      return data;
    }

    return [];
  });

  const isNewArr = () => {
    setDataList(() => {
      const data = dataLocal();

      if (data !== null) {
        return data;
      }

      return [];
    });
  };

  return (
    <div className={css.favoritesSection}>
      <div className={css.formcontainer}>
        <ModalForm />
      </div>
      <div className={css.campersListBox}>
        {dataList.length > 0 ? (
          <ul className={css.campersList}>
            {Array.isArray(dataList) &&
              dataList.map(camper => (
                <li key={camper._id}>
                  <FavoritesItem item={camper} isNewArr={isNewArr} />
                </li>
              ))}
          </ul>
        ) : (
          <p className={css.campersText}>
            Unfortunately, your list of favorites is empty. <br /> Go to the
            catalog and choose your dream camper.😉
          </p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
