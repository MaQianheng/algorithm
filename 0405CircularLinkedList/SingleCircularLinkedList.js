export class SingleCircularLinkedList {
    constructor(anyData = null, sclHead = null, sclNex = null) {
        this.sclHead = sclHead ? sclHead : this
        this.sclNex = sclNex ? sclNex : this
        if (Object.prototype.toString.call(anyData) === '[object Array]') {
            if (!anyData.length) throw new Error('Array length cannot be 0')
            this.anyData = anyData[0]
            this.batchAdd(anyData.slice(1))
        } else {
            this.anyData = anyData
        }
    }

    add(anyData) {
        let sclHead = this.sclHead, sclCur = this
        while (sclCur.sclNex !== sclHead) {
            sclCur = sclCur.sclNex
        }
        sclCur.sclNex = new SingleCircularLinkedList(anyData, sclHead, sclHead)
        return sclCur
    }

    batchAdd(arrParam) {
        if (!arrParam.length) return
        let sclEndNode = this.add(arrParam[0])
        for (let i = 1; i < arrParam.length; i++) {
            sclEndNode = sclEndNode.add(arrParam[i])
        }
    }

    getNodeLength() {
        let numRes = 1
        let sclTmp = this
        while (sclTmp.sclNex !== this.sclHead) {
            numRes++
            sclTmp = sclTmp.sclNex
        }
        return numRes
    }

    getNodeByIndex(numIndex) {
        // positive: 正序
        // negative: 倒序
        let numCurTraverseCount = 0
        let sclRes = this
        if (numIndex >= 0) {
            while (numCurTraverseCount !== numIndex) {
                sclRes = sclRes.sclNex
                numCurTraverseCount++
                if (sclRes === this.sclHead && numCurTraverseCount <= numIndex) throw new Error(`Index out of range which max is ${numCurTraverseCount - 1}`)
            }
        } else {
            const numTotalLength = this.getNodeLength()
            if (-(numIndex) > numTotalLength) throw new Error(`Index out of range which min is ${-(numTotalLength)}`)
            if (-(numIndex) === numTotalLength) return this.sclHead
            while (numCurTraverseCount < (numTotalLength + numIndex)) {
                sclRes = sclRes.sclNex
                numCurTraverseCount++
            }
        }
        return sclRes
    }

    removeByIndex(numIndex) {
        // todo: support remove head node, if remove head node update all nodes' sclHead property
        numIndex = numIndex - 1
        if (numIndex === -1) throw new Error('Head node cannot be removed')
        if (numIndex < 0) throw new Error('Index invalid')
        const sclTmp = this.getNodeByIndex(numIndex)
        if (sclTmp.sclNex === this.sclHead) throw new Error(`Index out of range`)
        const sclRes = sclTmp.sclNex
        sclTmp.sclNex = sclTmp.sclNex.sclNex
        return sclRes
    }

    print() {
        let sclHead = this.sclHead, sclCur = this
        do {
            console.log(sclCur.anyData)
            sclCur = sclCur.sclNex
        } while (sclCur !== sclHead)
    }
}
