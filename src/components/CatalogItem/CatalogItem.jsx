import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useState } from 'react';

import css from './CatalogItem.module.css';
import icons from '../../assets/icons/symbol.svg';

export const CatalogItem = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  console.log(item);

  return (
    <div className={css.catalogItem}>
      <img className={css.itemImg} src={item.gallery[0]} alt="" />
      <div className={css.descriptionBox}>
        <div className={css.itemTitleBox}>
          <h2 className={css.itemTitle}>{item.name}</h2>
          <p className={css.itemTitlePrice}>&#x20ac;{item.price}</p>
        </div>
        <div className={css.itemSubTitleBox}>
          <p>{item.rating}</p>
          <p>{item.location}</p>
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
        <button style={{ background: 'inherit' }}>
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
