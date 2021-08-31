export class DoubleLinkedList {
    constructor(anyData = null) {
        if (Object.prototype.toString.call(anyData) === '[object Array]') {
            if (!anyData.length) throw new Error('Array length cannot be 0')
            this.anyData = anyData[0]
            this.dlPre = null
            this.dlNex = null
            this.batchAdd(anyData.slice(1))
        } else {
            this.anyData = anyData
            this.dlPre = null
            this.dlNex = null
        }
    }

    getNodeLength() {
        let numRes = 1
        let dlRight = this, dlLeft = this
        while (dlLeft !== null || dlRight !== null) {
            if (dlRight) {
                dlRight = dlRight.dlNex
                if (dlRight) numRes++
            }
            if (dlLeft) {
                dlLeft = dlLeft.dlPre
                if (dlLeft) numRes++
            }
        }
        return numRes
    }

    getNodeByIndex(numIndex) {
        // positive: 正序
        // negative: 倒序
        let numCurTraverseCount = 0;
        let dlRes = this
        if (numIndex >= 0) {
            while (numCurTraverseCount !== numIndex) {
                dlRes = dlRes.dlNex
                numCurTraverseCount++
            }
        } else {
            while (dlRes.dlNex !== null) {
                dlRes = dlRes.dlNex
            }
            for (let i = 0; i < -(numIndex) - 1; i++) {
                dlRes = dlRes.dlPre
            }
        }
        return dlRes
    }

    removeNodeByIndex(numIndex) {
        // if (numIndex === 0) return this.dlNex
        // const dlTmp = this.getNodeByIndex(numIndex - 1)
        // dlTmp.dlNex = dlTmp.dlNex ? dlTmp.dlNex.dlNex : null
        // return this.getNodeByIndex(0)
    }

    setNode(strDirection = 'NEXT', dlWillBeReplaced, anyParam) {
        let dlNew
        if (anyParam instanceof DoubleLinkedList) dlNew = anyParam
        else dlNew = new DoubleLinkedList(anyParam)
        if (dlWillBeReplaced === null) {
            if (strDirection === 'PREV') {
                this.dlPre = dlNew
                dlNew.dlNex = this
            } else {
                this.dlNex = dlNew
                dlNew.dlPre = this
            }
        } else {
            if (dlWillBeReplaced && dlWillBeReplaced.dlPre) dlNew.dlPre = dlWillBeReplaced.dlPre
            if (dlWillBeReplaced && dlWillBeReplaced.dlNex) dlNew.dlNex = dlWillBeReplaced.dlNex
        }
        return dlNew
    }

    setPrevNode(anyParam) {
        return this.setNode('PREV', this.dlPre, anyParam)
    }

    setNextNode(anyParam) {
        return this.setNode('NEXT', this.dlNex, anyParam)
    }

    // return the last node
    add(anyParam) {
        let dlTmp = this
        while (dlTmp.dlNex) {
            dlTmp = dlTmp.dlNex
        }
        dlTmp.setNextNode(anyParam)
        return dlTmp.dlNex
    }

    batchAdd(arrParam) {
        if (!arrParam.length) return
        let dlEndNode = this.add(arrParam[0])
        for (let i = 1; i < arrParam.length; i++) {
            dlEndNode = dlEndNode.add(arrParam[i])
        }
    }

    reverse() {
    }

    print() {
        let dlTmp = this
        while (dlTmp) {
            console.log(dlTmp.anyData)
            dlTmp = dlTmp.dlNex
        }
    }

}
