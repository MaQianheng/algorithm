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

    print() {
        let sclHead = this.sclHead, sclCur = this
        do {
            console.log(sclCur.anyData)
            sclCur = sclCur.sclNex
        } while (sclCur !== sclHead)
    }
}
