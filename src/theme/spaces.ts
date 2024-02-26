const defaultScales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const space = ((scales) => {
  let values = {};

  for (let i = 0; i < scales.length; i++) {
    values = { ...values, [i]: (scales[i] as number) * 4 };
  }

  return values;
})(defaultScales);

export default space;
