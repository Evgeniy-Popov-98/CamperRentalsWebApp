import ModalReact from 'react-modal';

import css from './ModalWindow.module.css';

export const ModalWindow = ({ modalIsOpen, closeModal, item }) => {
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
        <h2 className={css.modalTitle}>{item.name}</h2>
        <div className={css.modalSubTitleBox}>
          <p className={css.SubTitleRating}>{item.rating}</p>
          <p className={css.SubTitleLocation}> {item.location}</p>
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
          <button className={css.detailsBtn}>Features</button>
          <button className={css.detailsBtn}>Reviews</button>
        </div>
        <hr className={css.detailsLine} />
        <div className={css.detailsFeaturesBox}>
          <ul>
            <li></li>
          </ul>
          <h3 className={css.detailsVehicle}>Vehicle details</h3>
          <ul className={css.detailsVehicleList}>
            <li className={css.detailsVehicleItem}>
              <p>Form</p>
              <p>{item.form}</p>
            </li>
            <li className={css.detailsVehicleItem}>
              <p>Length</p>
              <p>{item.length}</p>
            </li>
            <li className={css.detailsVehicleItem}>
              <p>Width</p>
              <p>{item.width}</p>
            </li>
            <li className={css.detailsVehicleItem}>
              <p>Height</p>
              <p>{item.height}</p>
            </li>
            <li className={css.detailsVehicleItem}>
              <p>Tank</p>
              <p>{item.tank}</p>
            </li>
            <li className={css.detailsVehicleItem}>
              <p>Consumption</p>
              <p>{item.consumption}</p>
            </li>
          </ul>
          {/* <Form /> */}
        </div>
      </div>
    </ModalReact>
  );
};
