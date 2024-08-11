export const dataLocal = () => {
  const data = window.localStorage.getItem('saved-camper');

  if (data !== null) {
    const dataItem = JSON.parse(data);
    return dataItem.item;
  }
  return [];
};

export const dataLocalID = () => {
  const data = window.localStorage.getItem('keyID');

  if (data !== null) {
    const dataItem = JSON.parse(data);
    return dataItem.ID;
  }
  return [];
};
