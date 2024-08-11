import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/camper/operations';

import forest from '../../assets/images/forest.jpeg';
import mountains from '../../assets/images/mountains.jpeg';
import ocean from '../../assets/images/ocean.jpeg';

import css from './HomePage.module.css';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.homePageContainer}>
      <div className={css.detailInfoBox}>
        <h1 className={css.detailTitle}>Motorhome rental</h1>
        <p className={css.detailSubTitle}>
          Traveler! Do you want to see beautiful and unforgettable places?
          <br /> Then check out our motorhome rental services.
        </p>
        <p className={css.detailText}>
          Renting a motorhome is the perfect way to combine the freedom of
          travel with the comfort of your own home. Our modern and fully
          equipped RVs allow you to explore the world without limitations,
          making every trip unforgettable. Forget about booking hotels and
          searching for rest stops - with us, you&rsquo;ll always have a cozy
          home wherever you go. Start your dream journey today!
        </p>
        <Link className={css.linkCatalog} to={'/catalog'}>
          To view the catalog, click here.
        </Link>
        <p></p>
      </div>
      <div className={css.imgContainer}>
        <img className={css.imgOne} src={ocean} alt="ocean" />
        <img className={css.imgTwo} src={forest} alt="forest" />
        <img className={css.imgThree} src={mountains} alt="mountains" />
      </div>
    </div>
  );
};
