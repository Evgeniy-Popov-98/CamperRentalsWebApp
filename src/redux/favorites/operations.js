export const addIsFavorites = item => {
  return {
    type: 'favorites/addFavorites',
    payload: item,
  };
};
