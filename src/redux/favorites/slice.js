const initialState = {
  items: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'favorites/addFavorites':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
