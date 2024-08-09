import { useState } from 'react';

import css from './FiltersBox.module.css';
import icons from '../../assets/icons/symbol.svg';

export const FiltersBox = () => {
  const [camper, setCamper] = useState('');

  const handleSizeChange = evt => {
    setCamper(evt.target.value);
  };

  return (
    <div className={css.filterContainer}>
      <div className={css.locationBox}>
        <h2 className={css.locationTitle}>Location</h2>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div className={css.filterBox}>
        <h2 className={css.filterBoxTitle}>Filters</h2>
        <h3 className={css.camperEquipment}>Vehicle equipment</h3>
        <hr className={css.line} />
        <div className={css.camperEquipmentBox}>
          <form action=""></form>
        </div>
        <div>
          <h3 className={css.camperType}>Vehicle type</h3>
          <hr className={css.line} />
          <div className={css.camperRadioBnt}>
            <label className={css.line}>
              <input
                type="radio"
                name="camper"
                value="Van"
                checked={camper === 'Van'}
                onChange={handleSizeChange}
              />
              <svg className={css.d} style={{}}>
                <use href={`${icons}#icon-camper2`} />
              </svg>
              <p>Van</p>
            </label>
            <label className={css.camperRadioBnt}>
              <input
                type="radio"
                name="camper"
                value="Fully Integrated"
                checked={camper === 'Fully Integrated'}
                onChange={handleSizeChange}
              />
              <svg className={css.descriptionIcons} style={{}}>
                <use href={`${icons}#icon-camper1`} />
              </svg>
              <p>Fully Integrated</p>
            </label>
            <label className={css.camperRadioBnt}>
              <input
                type="radio"
                name="camper"
                value="Alcove"
                checked={camper === 'Alcove'}
                onChange={handleSizeChange}
              />
              <svg className={css.descriptionIcons} style={{}}>
                <use href={`${icons}#icon-camper`} />
              </svg>
              <p>Alcove</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
