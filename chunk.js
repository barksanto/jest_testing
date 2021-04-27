const chunkArray = (array, length) => {
  // init chunked array
  const chunkedArr = []

  // loop through array
  array.forEach(val => {
    // get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // check if last and if last length is equal t the chunk length
    if (!last || last.length === length) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  })
  return chunkedArr
}

module.exports = chunkArray;