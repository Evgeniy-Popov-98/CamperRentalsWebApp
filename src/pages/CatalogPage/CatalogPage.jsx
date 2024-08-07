import { FiltersBox } from '../../components/FiltersBox/FiltersBox';
import { CatalogList } from '../../components/CatalogList/CatalogList';

export const CatalogPage = () => {
  return (
    <section>
      <FiltersBox />
      <CatalogList />
    </section>
  );
};
