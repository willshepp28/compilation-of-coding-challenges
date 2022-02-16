/**
 * PROBLEM STATEMENT
 * Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward.
 *
 * SOLUTION
 * Make a new copy of the integer, reverse it, then and check that it matchs the original integer
 *
 * PSUDEOCODE
 * 1. Initialize a variable called reverse
 * 2. Take the x argument, turn it to a string, then convert it to an array, reverse the array, lastly convert it to a string
 * 3. Assign step #2 to reverse variable
 * 4. Check if the x argument is equal to reverse
 */

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
   const reverse = x.toString().split('').reverse().join('');

   return x == reverse;
};

module.exports = isPalindrome;