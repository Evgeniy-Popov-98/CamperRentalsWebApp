import { useSelector } from 'react-redux';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { selectAllCampers } from '../../redux/camper/selectors';
import { pagination } from '../../utils/pagination';

import css from './CatalogList.module.css';
import { useEffect, useState } from 'react';

export const CatalogList = () => {
  const campers = useSelector(selectAllCampers);
  const [index, setIndex] = useState(0);
  const [campersArr, setCampersArr] = useState([]);

  useEffect(() => {
    async function dataCamper() {
      try {
        const data = await pagination(campers);
        console.log(data);

        setCampersArr(data);
      } catch (error) {}
    }
    dataCamper();
  });

  const upLoadList = () => {
    setIndex(index + 1);
    setCampersArr(prevState => [...prevState, ...campers[index]]);
  };

  console.log(campersArr);
  return (
    <div>
      <ul className={css.canperList}>
        {Array.isArray(campersArr) &&
          campersArr.map(camper => (
            <li key={camper._id}>
              <CatalogItem item={camper} />
            </li>
          ))}
      </ul>
      <button type="submit" onClick={() => upLoadList()}>
        Load more
      </button>
    </div>
  );
};
