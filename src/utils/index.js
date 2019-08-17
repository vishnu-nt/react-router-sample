export const groupByMake = (array) => {
  const result = array.reduce((models, product) => {
    models[product.make] = models[product.make] || [];
    models[product.make].push(product);
    return models;
  }, Object.create(null));
  return result;
};

export const groupByModel = (obj) => {
  const model = [];
  for (let key in obj) {
    model.push({
      ...obj[key][0],
      numberOfCars: obj[key].length
    });
  }
  return model;
};

export const formatKeyString = (str) => {
  const words = str.split('_');
  return words.reduce((replacedStr, word) => {
    return replacedStr + ' ' + word;
  }, '')
};