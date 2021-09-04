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
        const dlWillBeRemoved = this.getNodeByIndex(numIndex)
        if (dlWillBeRemoved.dlPre && dlWillBeRemoved.dlNex) {
            dlWillBeRemoved.dlPre.dlNex = dlWillBeRemoved.dlNex
            dlWillBeRemoved.dlNex.dlPre = dlWillBeRemoved.dlPre
        }
        if (!dlWillBeRemoved.dlPre) {
            dlWillBeRemoved.dlNex.dlPre = null
            return this.dlNex
        }
        if (!dlWillBeRemoved.dlNex) dlWillBeRemoved.dlPre.dlNex = null
        return this
    }

    setNode(strType = 'NEXT', anyParam, dlWillBeReplaced) {
        if (strType === 'THIS') this.anyData = anyParam
        let dlNew
        if (anyParam instanceof DoubleLinkedList) dlNew = anyParam
        else dlNew = new DoubleLinkedList(anyParam)
        if (dlWillBeReplaced === null) {
            if (strType === 'PREV') {
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
        return this.setNode('PREV', anyParam, this.dlPre)
    }

    setNextNode(anyParam) {
        return this.setNode('NEXT', anyParam, this.dlNex)
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
        let dlCur = this, dlNex = dlCur.dlNex, dlTmp
        if (!dlNex) return dlCur
        dlCur.dlNex = null
        dlCur.dlPre = dlNex
        dlCur = dlNex
        while (dlCur.dlNex) {
            dlTmp = dlCur.dlPre
            dlCur.dlPre = dlCur.dlNex
            dlCur.dlNex = dlTmp
            dlCur = dlCur.dlPre
        }
        dlCur.dlNex = dlCur.dlPre
        return dlCur
    }

    print() {
        let dlTmp = this
        while (dlTmp) {
            console.log(dlTmp.anyData)
            dlTmp = dlTmp.dlNex
        }
    }

}
