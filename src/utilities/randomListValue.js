import curry from 'ramda/src/curry';

const randomListValue = curry(arr => arr[Math.floor(Math.random() * arr.length)]);

export default randomListValue;
