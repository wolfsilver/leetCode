/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.14%)
 * Likes:    5729
 * Dislikes: 325
 * Total Accepted:    976.3K
 * Total Submissions: 3.4M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    let o = [];
    let max = 0, t = 0;
    for(var i = 0; i < len; i++){
        if (o.indexOf(s[i]) == -1) {
            o.push(s[i]);
            t++;
        }else {
            if (max < t) {
                max = t;
            }
            o.splice(0, o.indexOf(s[i]) + 1);
            o.push(s[i]);
            t = o.length;
        }
    }
    if (max < t) {
        max = t;
    }
    return max;
};

