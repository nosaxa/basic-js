const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mtx) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let numberOfCats = 0;
  for (let i = 0; i < mtx.length; i++) {
    for (let j = 0; j < mtx[i].length; j++) {
      if (mtx[i][j] === "^^") numberOfCats++;
    }
  }

  return numberOfCats;
}

module.exports = {
  countCats,
};
