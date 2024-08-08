import { useSelector } from 'react-redux';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { selectAllCampers } from '../../redux/camper/selectors';

export const CatalogList = () => {
  const campers = useSelector(selectAllCampers);

  console.log(campers);

  return (
    <div>
      <ul>
        <li>
          <CatalogItem />
        </li>
      </ul>
    </div>
  );
};
