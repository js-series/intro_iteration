/*
  Iteration Examples
*/

// 1. Write a function called 'addTen' that adds 10 to each
// value in an array.
function addTen(nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    result.push(10 + nums[i]);
  }

  return result;
}

// 2. Write a function called 'doubleInt' that doubles each number and returns
// the closest integer value.
function doubleInt(nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    result.push(Math.round(2 * nums[i]));
  }

  return result;
}
// 3. Write a function called 'capitalize' that capitalizes each value
function capitalize(strings) {
  var result = [];

  for (var i = 0; i < strings.length; i++) {
    result.push(strings[i].toUpperCase());
  }

  return result;
}

// 4. Write a function called 'greaterThanTen' that filters out number values less
// than 10.
function greaterThanTen(nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
      result.push(nums[i]);
    }
  }

  return result;
}

// 5. Write a function 'tenOrMore' that filters out number values less than 10.
function tenOrMore(nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 9) {
      result.push(nums[i]);
    }
  }

  return result;
}
// 6. Write a function 'add' that takes an array of values and adds them all up.
function add(nums, seed) {
  var result, start = 0;

  if (seed === undefined) {
    result = nums[0];
    start  += 1;
  } else {
    result = seed;
  }

  for (var i = start; i < nums.length; i++) {
    result += nums[i]
  }

  return result;
}
