/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1; // Base case: empty array returns 1
  return nums[0] * product(nums.slice(1)); // Recursive step
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) return 0; // Base case: no words
  let restLongest = longest(words.slice(1)); // Recursive call for the rest
  return Math.max(words[0].length, restLongest); // Compare lengths
}

/** everyOther: return a string with every other letter. */
function everyOther(str, idx = 0) {
  if (idx >= str.length) return ""; // Base case: beyond the string length
  return str[idx] + everyOther(str, idx + 2); // Take current and skip next
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) return true; // Base case: single char or empty string
  if (str[0] !== str[str.length - 1]) return false; // Mismatch found
  return isPalindrome(str.slice(1, -1)); // Check the substring
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1; // Base case: not found
  if (arr[idx] === val) return idx; // Value found
  return findIndex(arr, val, idx + 1); // Recursive call for the next index
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length === 0) return ""; // Base case: empty string
  return str[str.length - 1] + revString(str.slice(0, -1)); // Reverse step
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      result.push(...gatherStrings(obj[key])); // Recursive call for nested objects
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // Base case: not found
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid; // Found the value
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1); // Search left
  return binarySearch(arr, val, mid + 1, right); // Search right
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
