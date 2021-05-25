// import { helper } from '@ember/component/helper';

/*
// Writing a Helper Function
function substring(args) {
  let [string, start, end] = args;
  */
/*
// moving the destructuring into
function substring([string, start, end]) {
  return string.substring(start, end);
}*/

/*
// Named Arguments
function substring([string], { start, end }) {
  return string.substring(start || 0, end);
}*/

// Advanced: Class Helpers
import Helper from '@ember/component/helper';

export default class Substring extends Helper {
  compute([string], { start, end }) {
    return string.substring(start || 0, end);
  }
}
