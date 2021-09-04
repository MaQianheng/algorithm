export class SingleLinkedList {
    constructor(anyData = null) {
        this.slNex = null
        if (Object.prototype.toString.call(anyData) === '[object Array]') {
            if (!anyData.length) throw new Error('Array length cannot be 0')
            this.anyData = anyData[0]
            this.batchAdd(anyData.slice(1))
        } else {
            this.anyData = anyData
        }
    }

    getNodeLength() {
        let numRes = 1
        let slTmp = this
        while (slTmp.slNex !== null) {
            numRes++
            slTmp = slTmp.slNex
        }
        return numRes
    }

    getNodeByIndex(numIndex) {
        // positive: 正序
        // negative: 倒序
        let numCurTraverseCount = 0;
        let slRes = this
        if (numIndex >= 0) {
            while (numCurTraverseCount !== numIndex) {
                slRes = slRes.slNex
                numCurTraverseCount++
            }
        } else {
            const numTotalLength = this.getNodeLength()
            while (numCurTraverseCount < (numTotalLength + numIndex)) {
                slRes = slRes.slNex
                numCurTraverseCount++
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

    setNextNode(anyParam) {
        let slOriNex = this.slNex
        if (anyParam instanceof SingleLinkedList) this.slNex = anyParam
        else this.slNex = new SingleLinkedList(anyParam)
        if (slOriNex && slOriNex.slNex) this.slNex.slNex = slOriNex.slNex
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
        let slEndNode = this.add(arrParam[0])
        for (let i = 1; i < arrParam.length; i++) {
            slEndNode = slEndNode.add(arrParam[i])
        }
    }

    reverse() {
        if (this.slNex === null) return this
        let slPre = this
        let slCur = slPre.slNex
        let slNex = slCur.slNex
        if (slNex === null) {
            slPre.next = null
            slCur.next = slPre
            return slCur
        }
        this.slNex = null

        let slOriNex = slNex
        while (slOriNex !== null) {
            slCur.slNex = slPre
            slPre = slCur
            slCur = slOriNex
            slOriNex = slCur.slNex
        }
        slCur.slNex = slPre

        return slCur
    }

    print() {
        let slTmp = this
        while (slTmp) {
            console.log(slTmp.anyData)
            slTmp = slTmp.slNex
        }
    }

}
