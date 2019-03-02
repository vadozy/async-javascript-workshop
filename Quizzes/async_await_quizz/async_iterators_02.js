const customAsyncIterator = () => ({
  [Symbol.asyncIterator]: () => ({
    x: 0,
    next() {
      if (this.x > 10) {
        return Promise.resolve({
          done: true,
          value: this.x
        });
      }

      let y = this.x++;

      return Promise.resolve({
        done: false,
        value: y
      });
    }
  })
});

(async () => {
  for await (let x of customAsyncIterator()) {
    console.log(x);
  }
})();
