import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camper/operations';
import { useEffect } from 'react';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Hello</p>
    </div>
  );
};
