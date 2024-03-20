const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  const nums = strNums.map(n => {

    if (isNaN(n)) {
      throw new BadRequestError(`value:${n} is not a number`);

    } else {

      return Number(n);
    }

  });

  return nums;

}


module.exports = { convertStrNums };