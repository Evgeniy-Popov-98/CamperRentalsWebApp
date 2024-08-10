import css from './FilterType.module.css';
import icons from '../../assets/icons/symbol.svg';

export const FilterType = ({ camper, handleSizeChange }) => {
  return (
    <div>
      <h3 className={css.camperType}>Vehicle type</h3>
      <hr className={css.line} />
      <div className={css.camperTypeBox}>
        <label className={css.camperRadioBnt}>
          <input
            className={css.filterInput}
            type="radio"
            name="camper"
            value="Van"
            checked={camper === 'Van'}
            onChange={handleSizeChange}
          />
          <div className={css.radioBtnBox}>
            <svg className={css.filterIcons}>
              <use href={`${icons}#icon-camper2`} />
            </svg>
            <p className={css.camperFilterBtnText}>Van</p>
          </div>
        </label>
        <label className={css.camperRadioBnt}>
          <input
            className={css.filterInput}
            type="radio"
            name="camper"
            value="Fully Integrated"
            checked={camper === 'Fully Integrated'}
            onChange={handleSizeChange}
          />
          <div className={css.radioBtnBox}>
            <svg className={css.filterIcons}>
              <use href={`${icons}#icon-camper1`} />
            </svg>
            <p className={css.camperFilterBtnText}>Fully Integrated</p>
          </div>
        </label>
        <label className={css.camperRadioBnt}>
          <input
            className={css.filterInput}
            type="radio"
            name="camper"
            value="Alcove"
            checked={camper === 'Alcove'}
            onChange={handleSizeChange}
          />
          <div className={css.radioBtnBox}>
            <svg className={css.filterIcons}>
              <use href={`${icons}#icon-camper`} />
            </svg>
            <p className={css.camperFilterBtnText}>Alcove</p>
          </div>
        </label>
      </div>
    </div>
  );
};
