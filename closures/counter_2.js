/**
 * using class
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
class Counter {
  constructor(init) {
      this.init = init;
      this.presentNum = init;
  }
  increment = () => {
      this.presentNum += 1;
      return this.presentNum;
  };
  decrement = () => {
      this.presentNum -= 1;
      return this.presentNum;
  };
  reset = () => {
      this.presentNum = this.init;
      return this.presentNum;
  }
}

var createCounter = function(init) {
  return new Counter(init);
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/