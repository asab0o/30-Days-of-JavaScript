/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
      results.push(fn(arr[i], i));
  }
  return results;
};

// Using the reduce method:
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  // reduce()の第2引数は初期値を設定
  return arr.reduce((results, v, i) => {
    // putメソッドはつかえない
    results[i] = fn(v, i);
    return results;
  }, []);
};