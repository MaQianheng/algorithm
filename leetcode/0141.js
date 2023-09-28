/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false
    if (!(head.next)) return false
    let lnSlow = head, lnFast = head.next
    while (lnSlow.next) {
        if (lnSlow === lnFast) return true
        lnSlow = lnSlow.next
        if (!lnFast) return false
        if (!(lnFast.next)) return false
        lnFast = lnFast.next.next
    }
    return false
};