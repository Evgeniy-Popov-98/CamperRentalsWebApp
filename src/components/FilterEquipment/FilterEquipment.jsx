import css from './FilterEquipment.module.css';
import icons from '../../assets/icons/symbol.svg';

export const FilterEquipment = ({ hasAccepted, handleChange }) => {
  return (
    <div className={css.filterEquipmentConteiner}>
      <h3 className={css.camperEquipment}>Vehicle equipment</h3>
      <hr className={css.line} />
      <div className={css.camperEquipmentBox}>
        <label className={css.camperCheckBoxBtn}>
          <input
            className={css.filterInput}
            type="checkbox"
            name="AC"
            checked={hasAccepted}
            onChange={handleChange}
          />
          <div className={css.radioBtnBox}>
            <svg className={css.filterIcons}>
              <use href={`${icons}#icon-AC`} />
            </svg>
            <p className={css.camperFilterBtnText}>AC</p>
          </div>
        </label>
        <label className={css.camperCheckBoxBtn}>
          <input
            className={css.filterInput}
            type="checkbox"
            name="Automatic"
            checked={hasAccepted}
            onChange={handleChange}
          />
          <div className={css.checkboxBtnBox}>
            <svg
              className={css.filterIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#icon-automatic`} />
            </svg>
            <p className={css.camperFilterBtnText}>Automatic</p>
          </div>
        </label>
        <label className={css.camperCheckBoxBtn}>
          <input
            className={css.filterInput}
            type="checkbox"
            name="Kitchen"
            checked={hasAccepted}
            onChange={handleChange}
          />
          <div className={css.checkboxBtnBox}>
            <svg
              className={css.filterIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#icon-kitchen`} />
            </svg>
            <p className={css.camperFilterBtnText}>Kitchen</p>
          </div>
        </label>
        <label className={css.camperCheckBoxBtn}>
          <input
            className={css.filterInput}
            type="checkbox"
            name="TV"
            checked={hasAccepted}
            onChange={handleChange}
          />
          <div className={css.checkboxBtnBox}>
            <svg
              className={css.filterIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#icon-TV`} />
            </svg>
            <p className={css.camperFilterBtnText}>TV</p>
          </div>
        </label>
        <label className={css.camperCheckBoxBtn}>
          <input
            className={css.filterInput}
            type="checkbox"
            name="Shower/WC"
            checked={hasAccepted}
            onChange={handleChange}
          />
          <div className={css.checkboxBtnBox}>
            <svg
              className={css.filterIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#icon-shower`} />
            </svg>
            <p className={css.camperFilterBtnText}>Shower/WC</p>
          </div>
        </label>
      </div>
    </div>
  );
};
