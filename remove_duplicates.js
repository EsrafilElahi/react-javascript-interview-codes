const numbers = [3, 4, 2, 3, 7, 3];

const filterArr2 = numbers.filter((item, index, arr) => arr.indexOf(item) === index) // way 1

const filterArr3 = [...new Set(numbers)] // way 2

const filterArr4 = numbers.reduce((acc, val) => {
  acc.includes(val) ? acc : [...acc, val]
},[]) // way 3

// array of obj
  const removeDuplicatedArrObj = products?.filter(
    (firstValue, index, array) =>
      index === array?.findIndex((secondValue) => secondValue?.productId === firstValue?.productId)
  );
