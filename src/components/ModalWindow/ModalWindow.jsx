import ModalReact from 'react-modal';
import { useState } from 'react';

import { ModalForm } from '../ModalForm/ModalForm';
import { FeaturesInfo } from '../FeaturesInfo/FeaturesInfo';
import { ReviewsInfo } from '../ReviewsInfo/ReviewsInfo';

import css from './ModalWindow.module.css';
import icons from '../../assets/icons/symbol.svg';

export const ModalWindow = ({ modalIsOpen, closeModal, item }) => {
  const [isActiv, setIsActiv] = useState(true);

  return (
    <ModalReact
      isOpen={modalIsOpen}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      closeTimeoutMS={300}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
    >
      <div className={css.modalBox}>
        <div style={{ width: '902px' }}>
          <h2 className={css.modalTitle}>{item.name}</h2>
          <div className={css.modalSubTitleBox}>
            <p className={css.SubTitleRating}>
              <svg className={css.reviewsIcons}>
                <use href={`${icons}#icon-Rating`} />
              </svg>
              {item.rating}({item.reviews.length} Reviews)
            </p>
            <p className={css.SubTitleLocation}>
              <svg className={css.reviewsIconsLocation}>
                <use href={`${icons}#icon-map-pin`} />
              </svg>
              {item.location}
            </p>
          </div>
          <p className={css.modalPrice}>&#x20ac;{item.price}</p>
          <div className={css.modalImgBox}>
            {Array.isArray(item.gallery) &&
              item.gallery.map((img, index) => (
                <img key={index} className={css.modalImg} src={img} alt="" />
              ))}
          </div>
          <p className={css.modalDescription}>{item.description}</p>
          <div className={css.detailsBtnBox}>
            <button
              className={`${isActiv ? css.detailsBtnIsActive : css.detailsBtn}`}
              onClick={() => {
                setIsActiv(true);
              }}
            >
              Features
            </button>
            <button
              className={`${isActiv ? css.detailsBtn : css.detailsBtnIsActive}`}
              onClick={() => {
                setIsActiv(false);
              }}
            >
              Reviews
            </button>
          </div>
          <hr className={css.detailsLine} />
          <div className={css.detailsBottom}>
            {isActiv ? (
              <FeaturesInfo item={item} />
            ) : (
              <ReviewsInfo reviews={item.reviews} />
            )}

            <ModalForm />
          </div>
        </div>
      </div>
    </ModalReact>
  );
};
