export function addItemLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify({ item }));
}

export function getItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function restoreData(event) {
  const idItem = event._id;

  let newArr = [];
  const dataArr = getItemLocalStorage('saved-camper');

  for (const item of dataArr.item) {
    if (item._id !== idItem) {
      newArr.push(item);
    }
  }

  addItemLocalStorage('saved-camper', newArr);
}
