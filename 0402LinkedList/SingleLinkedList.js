export class SingleLinkedList {
    constructor(val = null) {
        this.slNex = null
        if (Object.prototype.toString.call(val) === '[object Array]') {
            if (!val.length) throw new Error('Array length cannot be 0')
            this.val = val[0]
            this.batchAdd(val.slice(1))
        } else this.val = val
    }

    getNodeLength() {
        let numRes = 1, slTmp = this
        while (slTmp.slNex !== null) {
            numRes++
            slTmp = slTmp.slNex
        }
        return numRes
    }

    getNodeByIndex(numIndex) {
        // positive: 正序
        // negative: 倒序
        let numTmp = 0
        let slRes = this
        if (numIndex >= 0) {
            while (numTmp !== numIndex) {
                slRes = slRes.slNex
                numTmp++
            }
        } else {
            const numTotalLength = this.getNodeLength()
            while (numTmp < (numTotalLength + numIndex)) {
                slRes = slRes.slNex
                numTmp++
            }
        }
        return slRes
    }

    removeNodeByIndex(numIndex) {
        if (numIndex === 0) return this.slNex
        const slTmp = this.getNodeByIndex(numIndex - 1)
        slTmp.slNex = slTmp.slNex ? slTmp.slNex.slNex : null
        return this.getNodeByIndex(0)
    }

    // 需要当前节点的上一个节点来删除当前节点
    /**
     fixme: 有bug
     const ll = new SingleLinkedList([1,2,3,4,5,6,7,8,9])
     ll.forEach((sl, index, slPre) => {
        if (sl.val === 3) sl.batchInsert([9,9,9,9,9,9,0,0,0,0,0,0])
        if (sl.val === 9) sl.removeThis(slPre)
    })
     */
    removeThis(slPre) {
        slPre.slNex = slPre.slNex.slNex
    }

    // 可传入SingleLinkedList类型，或者其他任意类型
    setNextNode(anyParam) {
        if (anyParam instanceof SingleLinkedList) this.slNex = anyParam
        else this.slNex = new SingleLinkedList(anyParam)
        // if (this.slNex && this.slNex.slNex) this.slNex.slNex = this.slNex.slNex
    }

    // return the last node
    add(anyParam) {
        let slTmp = this
        while (slTmp.slNex) {
            slTmp = slTmp.slNex
        }
        slTmp.setNextNode(anyParam)
        return slTmp.slNex
    }

    batchAdd(arrParam) {
        if (!arrParam.length) return
        let node = this.add(arrParam[0])
        for (let i = 1; i < arrParam.length; i++) {
            node = node.add(arrParam[i])
        }
    }

    insert(anyParam) {
        let slTmp = this
        if (slTmp.slNex !== null) {
            let tmp = slTmp.slNex
            slTmp.setNextNode(anyParam)
            slTmp.slNex.slNex = tmp
        } else this.add(anyParam)
        return slTmp.slNex
    }

    batchInsert(arrParam) {
        if (!arrParam.length) return
        let node = this.insert(arrParam[0])
        for (let i = 1; i < arrParam.length; i++) {
            node = node.insert(arrParam[i])
        }
    }

    reverse() {
        /**
         * 1->2->3->4
         * 1->null, 2->3->4
         */
        let slPre = null, slCur = this
        while (slCur) {
            const {slNex} = slCur
            slCur.slNex = slPre
            slPre = slCur
            slCur = slNex
        }
        return slPre
    }

    forEach(handler) {
        let slTmp = this, numIndex = 0, slPre = null
        while (slTmp) {
            handler(slTmp, numIndex, slPre)
            slPre = slTmp
            slTmp = slTmp.slNex
            numIndex += 1
        }
    }

    print() {
        let slTmp = this
        while (slTmp) {
            console.log(slTmp.val)
            slTmp = slTmp.slNex
        }
    }

}
