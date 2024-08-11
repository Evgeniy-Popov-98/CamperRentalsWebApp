export function addItemLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify({ item }));
}

export function addItemLocalStorageID(key, ID) {
  localStorage.setItem(key, JSON.stringify({ ID }));
}

export function getItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getItemLocalStorageID(key) {
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

export function restoreDataID(id) {
  let newArr = [];
  const dataArr = getItemLocalStorageID('keyID');

  for (const item of dataArr.ID) {
    if (item !== id) {
      newArr.push(item);
    }
  }

  addItemLocalStorageID('keyID', newArr);
}
