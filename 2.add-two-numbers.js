/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.86%)
 * Likes:    5416
 * Dislikes: 1392
 * Total Accepted:    915.9K
 * Total Submissions: 2.9M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let inc = 0;
    let res = l1;
    do {
        l1.val += (l2 && l2.val) + inc;
        if (l1.val > 9) {
            inc = 1;
            l1.val -= 10;
        } else {
            inc = 0;
        }

        l2 = l2 && l2.next;
        if (l2 || inc) {
            l1.next = l1.next || new ListNode(0);
            l1 = l1.next
        }else {
            break;
        }
    } while (1);

    return res;
};

