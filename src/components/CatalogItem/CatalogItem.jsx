import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useState } from 'react';

import css from './CatalogItem.module.css';
import icons from '../../assets/icons/symbol.svg';

import { addItemLocalStorage, restoreData } from '../../utils/localStorage';
import { dataLocal } from '../../constans/constans';

export const CatalogItem = ({ item }) => {
  console.log(item);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [switchBtn, setSwitchBtn] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const saveItem = switchBtn => {
    if (switchBtn) {
      let data = dataLocal();
      data.push(item);

      addItemLocalStorage('saved-camper', data);
      setSwitchBtn(false);
    } else {
      restoreData(item);
      setSwitchBtn(true);
    }
  };

  return (
    <div className={css.catalogItem}>
      <img className={css.itemImg} src={item.gallery[0]} alt="" />
      <div className={css.descriptionBox}>
        <div className={css.itemTitleBox}>
          <h2 className={css.itemTitle}>{item.name}</h2>
          <p className={css.itemTitlePrice}>&#x20ac;{item.price}</p>
        </div>
        <div className={css.itemSubTitleBox}>
          <p className={css.itemSubTitleRating}>
            <svg className={css.reviewsIcons}>
              <use href={`${icons}#icon-Rating`} />
            </svg>
            {item.rating}({item.reviews.length} Reviews)
          </p>
          <p className={css.itemSubTitleLocation}>{item.location}</p>
        </div>
        <p className={css.descriptionText}>{item.description}</p>
        <ul className={css.descriptionList}>
          <li className={css.descriptionItem}>
            <svg className={css.descriptionIcons} style={{ fill: 'black' }}>
              <use href={`${icons}#icon-users`} />
            </svg>
            <span>{item.details.hob} adults</span>
          </li>
          <li className={css.descriptionItem}>
            <svg
              className={css.descriptionIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#icon-automatic`} />
            </svg>
            <span>Automatic</span>
          </li>
          <li className={css.descriptionItem}>
            <svg className={css.descriptionIcons} style={{ fill: 'black' }}>
              <use href={`${icons}#icon-petrol`} />
            </svg>
            <span>Petrol</span>
          </li>
          <li className={css.descriptionItem}>
            <svg
              className={css.descriptionIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#icon-kitchen`} />
            </svg>
            <span>Kitchen</span>
          </li>
          <li className={css.descriptionItem}>
            <svg
              className={css.descriptionIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#icon-beds`} />
            </svg>
            <span>{item.details.beds} beds</span>
          </li>
          <li className={css.descriptionItem}>
            <svg className={css.descriptionIcons} style={{ stroke: 'black' }}>
              <use href={`${icons}#icon-AC`} />
            </svg>
            <span>AC</span>
          </li>
        </ul>
        <button className={css.buttonShowMore} onClick={() => openModal()}>
          Show more
        </button>
        <button
          style={{ background: 'inherit' }}
          onClick={() => saveItem(switchBtn)}
        >
          <svg className={css.buttonIsFavotes}>
            <use href={`${icons}#icon-like`} />
          </svg>
        </button>
      </div>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        item={item}
      />
    </div>
  );
};
