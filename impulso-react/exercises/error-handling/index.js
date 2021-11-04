function validArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Submit the correct parameters");

    if (typeof arr !== "object")
      throw new TypeError("Submit an array with a object type");

    if (typeof num !== "number")
      throw new TypeError("Num needs to be a number");

    if (arr.length !== num) throw new RangeError("Invalid size");

    return arr;
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log("ReferenceError");
      console.log(err.message);
    } else if (err instanceof TypeError) {
      console.log("TypeError");
      console.log(err.message);
    } else if (err instanceof RangeError) {
      console.log("RangeError");
      console.log(err.message);
    }
  }
}
