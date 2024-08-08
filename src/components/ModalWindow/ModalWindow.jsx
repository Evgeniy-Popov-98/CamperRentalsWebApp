import ModalReact from 'react-modal';

import css from './ModalWindow.module.css';
import icons from '../../assets/icons/symbol.svg';
import { ModalForm } from '../ModalForm/ModalForm';

export const ModalWindow = ({ modalIsOpen, closeModal, item }) => {
  console.log(item);

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
          <div>
            <ul className={css.detailsFeaturesList}>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ fill: 'black' }}>
                  <use href={`${icons}#icon-users`} />
                </svg>
                <span>{item.details.hob} adults</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#icon-automatic`} />
                </svg>
                <span>Automatic</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ stroke: 'black' }}>
                  <use href={`${icons}#icon-AC`} />
                </svg>
                <span>AC</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ fill: 'black' }}>
                  <use href={`${icons}#icon-petrol`} />
                </svg>
                <span>Petrol</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#icon-kitchen`} />
                </svg>
                <span>Kitchen</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#icon-beds`} />
                </svg>
                <span>{item.details.beds} beds</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#icon-conditioner`} />
                </svg>
                <span>{item.details.airConditioner} air conditioner</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#icon-CD`} />
                </svg>
                <span>CD</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#icon-radio`} />
                </svg>
                <span>Radio</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ stroke: 'black' }}>
                  <use href={`${icons}#icon-hob`} />
                </svg>
                <span>{item.details.hob} Hob</span>
              </li>
            </ul>
            <div className={css.detailsVehicle}>
              <h3 className={css.vehicleTitle}>Vehicle details</h3>
              <hr className={css.detailsLine} />
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
            </div>
          </div>

          <ModalForm />
        </div>
      </div>
    </ModalReact>
  );
};
