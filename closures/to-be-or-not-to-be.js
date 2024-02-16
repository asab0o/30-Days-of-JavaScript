/**
 * my first solution
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return {
      toBe: (val2) => {
          if(val === val2) {
              return true;
          } else {
              throw new Error('Not Equal');
          }
      },
      notToBe: (val2) => {
          if(val !== val2) {
              return true;
          } else {
              throw new Error('Equal');
          }
      }
  }
};


/**
 * simpler solution
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return {
      toBe: (val2) => {
          // NOTE: 三項演算子の中でthrow文は使用できない
          if (val !== val2) throw new Error("Not Equal");
          else return true;
      },
      notToBe: (val2) => {
          if (val === val2) throw new Error("Equal");
          else return true;
      }
  }
};

/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
  const throwError = (errorStr) => {throw new Error(errorStr)};
  
  return {
      // NOTE: When you want to use a default value when the value is undefined or null,
      // you can write it like "var result = value || defaultValue";
      toBe:    (val2) => val2 === val || throwError('Not Equal'),
      notToBe: (val2) => val2 !== val || throwError('Equal'),
  };
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/

