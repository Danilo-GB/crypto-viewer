import numeral from "numeral";

const qtyFilter = function(value) {
  if (!value) {
    return 0;
  }
  return numeral(value)
    .format("0.000a")
    .toUpperCase();
};

export { qtyFilter };
