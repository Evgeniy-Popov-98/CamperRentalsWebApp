export const pagination = array => {
  if (!Array.isArray(array)) return;

  const newArr = [];

  let indexArr = Math.ceil(array.length / 5);
  let rows = 0;

  for (let i = 0; i <= indexArr; i++) {
    const start = i + rows;
    const end = start + 4;
    newArr.push(array.slice(start, end));
    rows += 3;
  }

  return newArr;
};

export const paginationNewArr = (array, page) => {
  const newArr = array[page];

  return newArr;
};
