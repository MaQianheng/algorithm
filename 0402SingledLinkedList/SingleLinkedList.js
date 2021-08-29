export class SingleLinkedList {
    constructor(anyData = null) {
        this.anyData = anyData
        this.slNex = null
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

    print() {
        let slTmp = this
        while (slTmp) {
            console.log(slTmp.anyData)
            slTmp = slTmp.slNex
        }
    }

}
