import { useState } from 'react';
import { FilterEquipment } from '../FilterEquipment/FilterEquipment';
import { FilterType } from '../FilterType/FilterType';

import css from './FiltersBox.module.css';

export const FiltersBox = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [camper, setCamper] = useState('');

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

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
      <div>
        <h2 className={css.filterBoxTitle}>Filters</h2>
        <FilterEquipment
          hasAccepted={hasAccepted}
          handleChange={handleChange}
        />
        <FilterType camper={camper} handleSizeChange={handleSizeChange} />
      </div>
    </div>
  );
};
