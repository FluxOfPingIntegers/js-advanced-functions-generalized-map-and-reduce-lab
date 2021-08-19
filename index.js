// Add your functions here
function map(srcArray, callback = (arr) => {return arr}) {
  return srcArray.map(element => callback(element));
}

function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
      total = startingValue;
      for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
      }
      console.log(`src: ${src} , callback: ${callback} , startingValue: ${startingValue} , total: ${total}`)
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
      }
      console.log(`src: ${src} , callback: ${callback} , total: ${total}`)
      return total;
    }
  }